import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
// import { ExcelSheetModule } from './excelsheet/excelsheet.module';

// import {MatFileUploadModule} from 'angular-material-fileupload';
@NgModule({
  declarations: [
    AppComponent,
    ExcelsheetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // MatButtonModule,   
  ],
  providers: [],
  bootstrap: [ExcelsheetComponent]
})
export class AppModule { }
