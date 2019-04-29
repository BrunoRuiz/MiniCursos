import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoDeExecucao, domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/NegociacaoService';
import { Imprime } from '../helpers/utilitarios/index';

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
    private _service = new NegociacaoService();

    constructor(){  

        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    @logarTempoDeExecucao()
    adiciona(){
        
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
        Imprime(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso.');
    }

    private _isDiaUtil(data: Date) : boolean {
        
        return !(data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo);
    }

    @throttle()
    async importaDados(){

        try {

            const negociacoesParaImportar = await this._service
            .obterNegociacoes(res => {
 
                if(res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })


            const negociacoesJaImportadas = this._negociacoes.paraArray();

            if (Array.isArray(negociacoesParaImportar)){
                negociacoesParaImportar
                    .filter((negociacao: { ehIgual: (arg0: Negociacao) => boolean; }) => 
                        !negociacoesJaImportadas.some(jaImportada => 
                            negociacao.ehIgual(jaImportada)))
                    .forEach((negociacao: Negociacao) => 
                        this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);
        }                 
            
        } catch (err) {
            this._mensagemView.update(err.message);
        }             
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
