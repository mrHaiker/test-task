import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SearchComponent } from './search/search.component';
import { RowComponent } from './row/row.component';
import { TableComponent } from './table/table.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SearchComponent,
    RowComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
