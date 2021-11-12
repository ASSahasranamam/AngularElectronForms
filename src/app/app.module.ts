import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormsComponent } from './user-forms/user-forms.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserDisplayComponent } from './user-display/user-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormsComponent,
    UserDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
