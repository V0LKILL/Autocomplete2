import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { SelectBoxComponent } from './components/select-box/select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    ListItemComponent,
    MainComponent,
    SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
