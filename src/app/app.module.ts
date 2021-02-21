import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {ChatModule} from './chat/chat.module';
import {ShopModule} from './shop/shop.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TableComponent } from './table/table.component';
import { TablebodyComponent } from './table/tablebody/tablebody.component';
import { RowComponent } from './table/tablebody/row/row.component';
import { ColumnComponent } from './table/tablebody/row/column/column.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NotFoundPageComponent,
    TableComponent,
    TablebodyComponent,
    RowComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    ShopModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
