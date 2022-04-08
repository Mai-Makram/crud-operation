import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { UsersComponent } from './views/users/users.component';
import { UsersService } from './servies/users.service';
import { SinglePageComponent } from './views/single-page/single-page.component';
import { AddPageComponent } from './views/add-page/add-page.component';
import { FormsModule } from '@angular/forms';
import { UpdatePageComponent } from './views/update-page/update-page.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { MDBBootstrapModule} from 'angular-bootstrap-md'
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    SinglePageComponent,
    AddPageComponent,
    UpdatePageComponent,
    SearchFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule ,
    DataTablesModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
