import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-option-one',
  templateUrl: './option-one.component.html',
  styleUrls: ['./option-one.component.scss']
})
export class OptionOneComponent implements OnInit {

  @Input() posts: Post[] = [];
  @Input() itemsPerPage: number = 10;
  page = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
