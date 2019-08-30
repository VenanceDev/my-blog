import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post_item: Post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.post_item.loveIts+=1;
  }

  onDontLoveIt() {
    this.post_item.loveIts -= 1;
  }

}
