import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
		declarations: [AppComponent, ChatComponent, ],
		imports: [BrowserModule, FormsModule, CommonModule, HttpClientModule],
		bootstrap: [AppComponent],
})

export class AppModule { }

