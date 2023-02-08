/* Variáveis */
const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");


const randomGenerator = Math.round(Math.random() * 10);
//gerador de numeros aleatórios

let xAttempts = 1;
//variavél que vai contar o numero de tentativas



/* função callback */
function handleTryClick(event) {
  //Essa função está ligada ao html pelo comando que eu coloquei na tag(onclick)

  event.preventDefault();//tradução: não faça o padrão desse evento
  //função para impedir que a pg recarregue, já que se trata de um "form"

  const inputNumber = document.querySelector("#inputNumber");
  //inputNumber agr tem o valor do id que ele buscou no html


  if(Number(inputNumber.value) == randomGenerator) {
    //coloqueo o .value para pegar o valor que eu digitei no input

    screenOne.classList.add("hide");
    //buscou pela classe .screenOne e adicionou o hide

    screenTwo.classList.remove("hide");
    //buscou pela classe .screenTwo e retirou o hide

    screenTwo.querySelector("h2").innerText = (`Você acertou em: ${xAttempts} tentativas`);
    //buscou dentro do elemento de classe .screenTwo consultou e redefiniu o conteudo do h2
  }
  
  inputNumber.value = "";
  //Sempre que eu tentar e o número não for igual ele reseta o valor do número no input

  xAttempts++
  //add mais um numero a variavel xAttempts toda vez que eu erro o numero
};



/* Eventos */
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");



/* chamando a callback */
btnTry.addEventListener("click", handleTryClick);
//callback é um função passada como argumento de outra função.

//tradução: adicionar um evento ao ouvidor
btnReset.addEventListener("click", function() {//usei uma função anonima como callback
  screenOne.classList.remove("hide");
  screenTwo.classList.add("hide");

  xAttempts = 1;
  //Voltando o valor para um
});
//Evento para o outro botão
