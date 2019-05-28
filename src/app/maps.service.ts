import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClientModule) { }

  getLocation() {
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=AIzaSyCZVQiQ5HOprGADSF1kFH5GiOjlXDILuKo');
  }
}
