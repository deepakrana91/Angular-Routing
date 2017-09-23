import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { FormdataService } from './formdata.service';
import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { FilterPipe } from './filter.pipe';
import { CapitalizePipe } from './capitalize.pipe';

const appRoutes: Routes = [ 
  {path:'',component:UserDataComponent},
  {path:'users',component:UserDataComponent},
  {path:'search',
  canActivate:[AuthGuard],component:SearchDataComponent},
  {path:'**',redirectTo:'/users'}

]

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    SearchDataComponent,
    FilterPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FormService,FormdataService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
