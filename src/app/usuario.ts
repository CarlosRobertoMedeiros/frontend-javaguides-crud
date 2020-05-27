export class Usuario{
    
    private _id: number;
    private _nome: String;
    private _usuario: String;
    private _senha: String;
    private _ativo: Boolean = true;
    
    constructor(){ }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
    public get usuario(): String {
        return this._usuario;
    }
    public set usuario(value: String) {
        this._usuario = value;
    }
    public get senha(): String {
        return this._senha;
    }
    public set senha(value: String) {
        this._senha = value;
    }

    public get ativo(): Boolean {
        return this._ativo;
    }
    public set ativo(value: Boolean) {
        this._ativo = value;
    }
}