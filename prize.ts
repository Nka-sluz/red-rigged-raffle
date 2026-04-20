export class Prize {
  constructor(
    private prizeName: string,
    private prizeQuantity: number,
  ) {}

  public get name(): string {
    return this.prizeName;
  }

  public get quantity(): number {
    return this.prizeQuantity;
  }

  public set quantity(amount: number) {
    this.prizeQuantity = amount;
  }
}
