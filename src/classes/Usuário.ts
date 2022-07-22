import Sexo from "../utils/Sexo";
import Endereço from "./Endereço";

export default class Usuário {
  public get endereço(): Endereço {
      return this._endereço;
  }
  public set endereço(value: Endereço) {
      this._endereço = value;
  }
  public get cpf(): number {
    return this._cpf;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  private _sexo = Sexo.M;
  public get sexo() {
    return this._sexo;
  }
  public set sexo(value) {
    this._sexo = value;
  }
  constructor(
    private _nome: string,
    private _cpf: number,
    _sexo,
    private _endereço: Endereço
  ) {}
}
