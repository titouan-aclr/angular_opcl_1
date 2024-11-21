import { NgModule } from '@angular/core';
import {CommonModule, UpperCasePipe} from '@angular/common';
import {FaceSnapComponent} from "./components/face-snap/face-snap.component";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {SingleFaceSnapComponent} from "./components/single-face-snap/single-face-snap.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FaceSnapsRoutingModule} from "./face-snaps-routing.module";

@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ]
})
export class FaceSnapsModule { }
