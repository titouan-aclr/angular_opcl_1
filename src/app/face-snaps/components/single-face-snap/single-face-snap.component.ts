import {AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FaceSnap} from '../../../core/models/face-snap.model';
import {FaceSnapsService} from '../../../core/services/face-snaps.service';
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonLabel!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.buttonLabel = 'Oh Snap!';
    this.getFaceSnap();
  }

  onSnap(faceSnapId: number) {
    if (this.buttonLabel === 'Oops unSnap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonLabel = 'Oh Snap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.buttonLabel = 'Oops unSnap!')
      );
    }
  }

  private getFaceSnap() {
    const faceSnapId: number = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
