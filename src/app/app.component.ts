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
  faceSnaps!: FaceSnap[];
  
  ngOnInit(): void {
      this.faceSnaps = [{
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/280px-Three_Rock_Mountain_Southern_Tor.jpg',
        location: 'la montagne'
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon!',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
      }]
  }
}
