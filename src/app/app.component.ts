import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  
  ngOnInit(): void {
      this.mySnap = new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        new Date(),
        0,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
      );
  }
}
