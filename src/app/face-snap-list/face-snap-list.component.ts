import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        160,
        'Paris'
      ),
      new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/280px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        30,
        'la montagne'
      ),
      new FaceSnap(
        'Un bon repas',
        "Mmmh que c'est bon!",
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        0
      ),
    ];
  }
}