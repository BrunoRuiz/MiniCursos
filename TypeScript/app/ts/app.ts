import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

(document.querySelector('.form')as Element).
    addEventListener('submit', controller.adiciona.bind(controller));

(document.querySelector('#botao-importa')as Element).
    addEventListener('click', controller.importaDados.bind(controller));


