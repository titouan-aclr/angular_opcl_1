import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgClass, NgStyle, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonLabel!: string;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.buttonLabel = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonLabel === 'Oops unSnap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonLabel = 'Oh Snap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonLabel = 'Oops unSnap!';
    }
  }
}
