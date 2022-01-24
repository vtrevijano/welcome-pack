import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
  public posts: any;
  constructor(private request: ApiService) { }

  ngOnInit(): void {
  }
  getAllPosts = () => {
    this.request.getAllPosts().subscribe((results) => {
      this.posts = results;
      console.log(this.posts);
    });
    
  };
 
}