export default class Endereço {
  public get cidade(): string {
    return this._cidade;
  }
  public get bairro(): string {
    return this._bairro;
  }
  public get cep(): number {
    return this._cep;
  }
  public get numero(): number {
    return this._numero;
  }
  public get rua(): string {
    return this._rua;
  }
  constructor(
    private _rua: string,
    private _numero: number,
    private _cep: number,
    private _bairro: string,
    private _cidade: string
  ) {}
}
