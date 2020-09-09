import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordpressPostsComponent } from './wordpress-posts/wordpress-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    WordpressPostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
