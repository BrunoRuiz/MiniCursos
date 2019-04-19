export function logarTempoDeExecucao(emSegundos: boolean = false){

    return function(target: any, propertykey: string, descriptor: PropertyDescriptor){
        
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){

            let unidade = 'milesegundos';
            let divisor = 1;

            if(emSegundos){

                unidade = 'segundos';
                divisor = 1000;
            }

            console.log('---------------------------------------------------');
            console.log(`Parametros passados para o método ${propertykey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            
            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();
            console.log(`O retorno do método ${propertykey} é ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertykey} demorou ${(t2-t1) / divisor} ${unidade}`);

            console.log('---------------------------------------------------');
            return retorno;
        }

        return descriptor;
    }
}