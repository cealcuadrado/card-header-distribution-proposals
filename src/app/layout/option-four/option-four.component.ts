import { Post } from './../../interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-four',
  templateUrl: './option-four.component.html',
  styleUrls: ['./option-four.component.scss']
})
export class OptionFourComponent implements OnInit {

  @Input() posts: Post[] = [];
  @Input() itemsPerPage: number = 10;
  page = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
