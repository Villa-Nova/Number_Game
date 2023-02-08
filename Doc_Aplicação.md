# Escplicação direta:
No JavaScript crio a variavél que gera números aleatórios:
  > <!-- const randomGenerator = Math.round(Math.random() * 10); -->

Crio também a variavél que irá contabilizar minhas tentativas:
  > <!-- let xAttempts = 1; -->

Realizo a criação de uma função com o nome "handleClick" passando o parametro "event". Com o parametro "event" já determinado, dentro do escopo da função executo a seguinte função: 
  > <!-- event.preventDefault(); -->
Responsavel por previnir que minha página recarregue toda vez que minha função "handleClick" for executada. Isso acontece pois o sistema identifica ser um formulário, então ele quer tomar alguma ação padrão que é enviar.

Dentro do escopo da função "handleClick" crio uma variavél do tipo const com o nome de "inputNumber" atribuindo a ela o dever de localizar e guardar o valor do meu input no html.
  > <!-- const inputNumber = document.querySelector("#inputNumber"); -->
No escopo realizo a contrução de um "if" com o parametro de se o valor de "inputNumber" for igual ao do gerador de números "randomGenerator" deve ser realizado uma busca no html e adicionar a classe "hide" com a função ".add" do pacote "classList" a uma tag especificada com o "document.querySelector()" e ao memso tempo retirar esse valor da que já tinha com a função ".remove". Após esse processo a classe que está sem o "hiden" irá aparecer com a menssagem determinada e o número de tentativas. Para reescrever um texto do html uso o comando ".innerText" e atribuo a ele o novo valor, no caso a mensagem nova.
  > 
<!--   
function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) == randomGenerator) {
    document.querySelector(".screenOne").classList.add("hide");
    document.querySelector(".screenTwo").classList.remove("hide");

    document.querySelector(".screenTwo h2").innerText = (`Você acertou em: ${xAttempts} tentativas`);
  }

  xAttempts++
}; 
-->

## Observações:
Criei as variaveis constantes "screenOne" e "screenTwo" e coloquei elas no lugar do document para minha aplicação não ficar procurando no html inteiro.

### Anotações:
  > document.querySelector("");
     - Serve para localizar algo no meu html como tag, classe, e id.
     - Eu procuro da mesma forma como no CSS.
  
  > classList.
    - É um pacote que me permite usar outras funções. Até o momento usei as funções .add() e .remove().

  > innerText = ();
    - Uso para ver o conteudo do elemento ou reatribuir o valor.

  > callback
    - É uma função passada como argumento em outra função.
    - É uma função criada e guardada em memoria pelo js esperando para ser executada dps.
  
  > função anonima
    - Uma função sem nenhum tipo de identificação, sem um nome.
