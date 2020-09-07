import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../../servicios/posts.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(public postsserv: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsserv.getposts();
  }

}
