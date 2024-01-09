export function ValidaDebito(target: any, propertyKeyL: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(valorDoDebito: number) {
        if (valorDoDebito <= 0) throw new Error('O valor precisa ser maior que 0');

        if (valorDoDebito > this.saldo) throw new Error('Saldo insuficiente');

        return originalMethod.appy(this, [valorDoDebito]);
    }

    return descriptor;
}

export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (valorDoDeposito: number){
        if (valorDoDeposito) throw new Error('o valor a ser depositado deve ser maior que 0');

        return originalMethod.apply(this, [valorDoDeposito]);
    }

    return descriptor;
}