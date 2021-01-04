import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes: number = 0;
  likeThis(): void {
    this.likes++;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
