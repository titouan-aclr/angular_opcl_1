import { SnapType } from "./snap-type.type";

export class FaceSnap {
  id: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdDate: Date,
    public snaps: number,
    public location?: string
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addSnap() {
    this.snaps++;
  }

  removeSnap() {
    this.snaps--;
  }

  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }
}
