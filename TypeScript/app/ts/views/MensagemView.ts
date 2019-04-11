class MensagemView extends View<string> {

    update(model: string){

        this._element.innerHTML = this.template(model);
    }

    template(model: string){

        return `<p class="alert alert-info">${model}</p>`;
    }
}