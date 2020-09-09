import { Component, OnInit } from '@angular/core';
import {Posts} from './wp-post'
import { ApiClient } from './api-client';

@Component({
  selector: 'app-wordpress-posts',
  templateUrl: './wordpress-posts.component.html',
  styleUrls: ['./wordpress-posts.component.css']
})
export class WordpressPostsComponent implements OnInit {

  public posts: Posts[];
 
	private apiClient: ApiClient;
 
	constructor( apiClient: ApiClient ) {
 
		this.apiClient = apiClient;
		this.posts = [];

		document.cookie = "XSRF-TOKEN=server-generated-token";
 
	}
 
	public async loadPosts() : Promise<void> {
 
		try {
			this.posts = await this.apiClient.get<Posts[]>({
				url: "https://wordpress.org/news/wp-json/wp/v2/posts?filter[orderby]=date+desc",
				params: {
          limit: 20
				}
      });
      
 
		} catch ( error ) {
 
			console.error( error );
 
		}
 
  }
  
  ngOnInit() {
  }

}
