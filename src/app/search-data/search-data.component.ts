import { FormdataService } from './../formdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {


  nameArray:any[]=[];
  constructor(private formdataService:FormdataService) { }

  ngOnInit() {

    this.nameArray= this.formdataService.getData();

    
  }

}
