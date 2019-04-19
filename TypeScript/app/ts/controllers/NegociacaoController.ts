import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoDeExecucao } from '../helpers/decorators/index';
import { domInject } from '../helpers/decorators/index';


export class NegociacaoController{
    //Testando
    @domInject('#data')
    private _inputData: HTMLInputElement;

    @domInject('#quantidade')
    private _inputQuantidade: HTMLInputElement;

    @domInject('#valor')
    private _inputValor: HTMLInputElement;
    
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){  

        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao()
    adiciona(event: Event){

        event.preventDefault();
        let data = new Date(this._inputData.value.replace(/-/g, ','));

        if (!this._isDiaUtil(data)){

            this._mensagemView.update("Somente negociações em dias uteis, por favor!");
            return
        }

        const negociacao = new Negociacao(        
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso.');
    }

    private _isDiaUtil(data: Date) : boolean {
        
        return !(data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo);
    }

    importaDados(){

        function isOk(res: Response){

            if (res.ok){
                return res;            
            }
            else{
                
                throw new Error(res.statusText);
            }
            
        }
        
        fetch('http://localhost:8080/dados')
        .then(res => isOk(res))
        .then(res => res.json())
        .then(
                (dados: NegociacaoParcial[]) => {
                
                    dados
                        .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                        .forEach(negociacao => this._negociacoes.adiciona(negociacao))
                    this._negociacoesView.update(this._negociacoes);
                })
        .catch(err => console.log(err.message));    
    }
}


enum DiaDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
