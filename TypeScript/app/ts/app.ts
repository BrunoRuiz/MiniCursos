import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

(document.querySelector('.form')as Element).addEventListener('submit', controller.adiciona.bind(controller));