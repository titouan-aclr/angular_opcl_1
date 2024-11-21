import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { SnapType } from '../models/snap-type.type';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {

  constructor(private http:HttpClient) {}

  private faceSnaps: FaceSnap[] = [];

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: string): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    // faceSnap.snap(snapType);
  }

  addFaceSnap(newFaceSnap: FaceSnap) {
    this.faceSnaps.push(newFaceSnap);
  }
}
