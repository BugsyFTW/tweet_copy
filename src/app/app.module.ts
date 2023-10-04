import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

import { AppComponent } from './app.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { FeedComponent } from './components/feed/feed.component';
import { ComfirmDialogComponent } from './components/comfirm-dialog/comfirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    FeedComponent,
    ComfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
