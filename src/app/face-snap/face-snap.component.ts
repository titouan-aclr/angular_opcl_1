import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonLabel!: string;

  ngOnInit(): void {
    this.buttonLabel = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonLabel === 'Oops unSnap!') {
      this.faceSnap.removeSnap();
      this.buttonLabel = 'Oh Snap!';
    } else {
      this.faceSnap.addSnap();
      this.buttonLabel = 'Oops unSnap!';
    }
  }
}
