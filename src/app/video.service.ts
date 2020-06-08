import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Video } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = '/api/videos'; 
  private _postUrl = '/api/videos';
  private _putUrl = '/api/videos/';
  private _deleteUrl = '/api/videos/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'jwt-token'
    })
  }


  constructor(private _http:HttpClient) { }

  getVideos(){
    return this._http.get(this._getUrl);
  }

  addVideo(video:Video):Observable<Video>{
    return this._http.post<Video>(this._postUrl, video, this.httpOptions)
                      .pipe();
  }

  updateVideo(video:Video):Observable<Video>{
    return this._http.put<Video>(this._postUrl, video, this.httpOptions)
                      .pipe();
  }

  //syntax:http.delete(url，options)
  deleteVideo(video:Video):Observable<Video>{
    return this._http.delete<Video>(this._deleteUrl + video._id, this.httpOptions)
                      .pipe();
  }

}
