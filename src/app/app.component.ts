import { Component } from '@angular/core';
import { WordpressPostsComponent } from 'src/app/wordpress-posts/wordpress-posts.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Blog and Map App';
  wordpressPosts = {WordpressPostsComponent};
}