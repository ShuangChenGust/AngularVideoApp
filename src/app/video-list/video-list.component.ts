import { Component, OnInit, Input, Output } from '@angular/core';
import { Video } from '../video';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {

  @Input() videos:Video[]
  @Output() SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid:Video){
    this.SelectVideo.emit(vid);
  }

}
