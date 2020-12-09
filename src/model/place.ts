export class Place {
  readonly id: string;
  constructor(
    readonly documentId: string,
    readonly name: string,
    readonly address: string,
    readonly url: string,
    readonly latitude: number,
    readonly longitude: number
  ) {
    this.id = documentId;
  }
}
