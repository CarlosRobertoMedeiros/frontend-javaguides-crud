export class Usuario{
    
    private id:number;
    private nome:String;
    private usuario:String;
    private senha:String;
    private ativo:Boolean;

    constructor(id:number, nome:String, usuario:String, senha:String, ativo:Boolean){
        this.id=id;
        this.nome=nome;
        this.usuario=usuario;
        this.senha=senha;
        this.ativo=ativo; 
    }

    get getId(){
        return this.id;
    }


}