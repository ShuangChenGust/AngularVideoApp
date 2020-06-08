import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {


  public hidenewVideo:boolean = true;

  videos:any=[];
  
  selectedVideo:Video;

  constructor(private _videoService:VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
      .subscribe(resVideo => {
        for(const d of (resVideo as any)){
          this.videos.push(d);
        }
      })
  }

  onSelectVideo(video:Video){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo)
  }

  onSubmitAddVideos(video:Video){
    this._videoService.addVideo(video)
        .subscribe(resNewVideo=>{
          this.videos.push(resNewVideo);
          this.hidenewVideo = true;
          this.selectedVideo = resNewVideo;
        })
  }

  onUpdateVideoEvent(video:Video){
    this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo=>video = resUpdatedVideo);
        this.selectedVideo = null;
  }

  onDeleteVideoEvent(video:any){
    let videoArray = this.videos
    this._videoService.deleteVideo(video)
        .subscribe(resUpdatedVideo=>{
          for(let i=0; i<videoArray.length; i++){
            if(videoArray[i]._id === video._id){
              videoArray.splice(i,1);
            }
          }
        });
        this.selectedVideo = null;    
  }


  newVideo(){
    this.hidenewVideo = false;
  }

}
