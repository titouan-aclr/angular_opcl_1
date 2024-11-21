import {AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgClass, NgStyle, UpperCasePipe, DatePipe, RouterLink, AsyncPipe, NgIf],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonLabel!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buttonLabel = 'Oh Snap!';
    this.getFaceSnap();
  }

  onSnap() {
    // if (this.buttonLabel === 'Oops unSnap!') {
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    //   this.buttonLabel = 'Oh Snap!';
    // } else {
    //   this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    //   this.buttonLabel = 'Oops unSnap!';
    // }
  }

  private getFaceSnap() {
    const faceSnapId: string = this.route.snapshot.params['id'];
    // this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
