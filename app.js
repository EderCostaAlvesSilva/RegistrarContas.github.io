const conta = document.getElementById('conta');
const valor = document.getElementById('valor');
const btn = document.getElementById('btn');
const saida1 = document.getElementById('saida1');
const saida2 = document.getElementById('saida2');

let nContas = 0;
let Total = 0;
let quant = '';


function funciona(){

    let  nomeConta = conta.value;
    let preçoValor = Number(valor.value);

    nContas++;
    Total+= preçoValor;
   
    quant += `${nomeConta} - R$: ${(preçoValor).toFixed(2)}\n`

    saida1.textContent = `${quant}\n ----------------------`;
    saida2.textContent = `${nContas} Conta(s) - Total R$: ${(Total).toFixed(2)}`;

    conta.value = '';
    valor.value = '';

    conta.focus();
}

btn.addEventListener('click', funciona)

