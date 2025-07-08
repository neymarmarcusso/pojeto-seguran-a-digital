const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const numeroSenha = document.querySelector('parametro-senha__botao');

const campoSenha = document.querySelector ('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
campoSenha.value = letrasMaiusculas;

botoes(0).onclick = diminuiTamanho;
botoes(1).onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
   // tamanhoSenha = tamanhoSenha - 1;
   tamanhoSenha --;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
  // tamanhoSenha = tamanhoSenha + 1;
  tamanhoSenha ++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);