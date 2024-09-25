export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdDate: Date,
    public snaps: number,
    public location?: string
  ) {}

  addSnap() {
    this.snaps++;
  }

  removeSnap() {
    this.snaps--;
  }
}
