export class Place {
  readonly id: string;
  constructor(
    readonly documentId: string,
    readonly name: string,
    readonly address: string,
    readonly url: string
  ) {
    this.id = documentId;
  }
}
