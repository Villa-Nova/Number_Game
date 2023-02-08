# O que é DOM?
  > Document Object Model
    modelagem do documento como objeto JavaScript.

  > Representação do HTML em objeto JavaScript
    Atributos (propriedades) e métodos (funcionalidades).
  
  > Criado pelo navegador (browser)
    É uma interface (API) usada no navegador.

## Para que serve?
  > JavaScript usa a DOM para se conectar ao HTML
    Dom não é o JavaScript.
  
  > Manipular o HTML com JavaScript
    Modificar o HTML, os estilos e até disparar ações.


# Element e Node
As tags Html, quando usadas pela DOM, podemos chamar de node(nó) ou de element(elemento).
  > pegando um elemento
  <!-- const h1 = document.querySelector('ELEMENTO AQUI') -->
  - Isso vai me dar um HTMLelement. Para eu ver o que foi devolvido é só digitar o h1.
  - document: é o meu html
  - query: é consulte
  - Selector: é seletor

  > pegando vários elementos
  <!-- const links = document.querySelectorAll('ELEMENTO AQUI')-->
  Isso vai me dar uma Nodelist
    Para eu ver alguma posição(Esse comando me devolve em forma de list) eu coloco links[POSIÇÃO].

## Receber e modificar valores
podemos pegar qualquer valor das tags e, também, alterar eles.
  > ver o valor de texto
  <!-- h1.innerText --> | Isso vai me devolver o que está escrito no h1.
  <!-- h1.innerText = "ESCREVER AQUI" --> | Posso alterar oq está escrito.

  > ver as tags html desse elemento
  <!-- h1.innerHTML -->
  - Isso vai me devolver as tag html dentro desse elemento.

### Alterar estilos
Podemos alterar estilos ou adicionar classes em elementos.
  > alterando o estilo
  <!-- h1.style.backgroundColor = "COR AQUI" -->

  > adicionando classes
  <!-- h1.classList.add('hide') -->

  > removendo classes
  <!-- h1.classList.remove('hide') -->

  > alternando entre classes
  <!-- h1.classList.toggle('hide') -->

------------------------------------------------------

<!-- Objetos globais -->
- Window
- Document

<!-- Anotações -->
--- O JavaScript usa a DOM para "conversar" com o documento "html".
--- A DOM não é o JS e sim a representação do html em formato de objeto JS.
---Obs: É a maneira que usamos para fazer os dois se comunicarem.
--- A DOM é uma interface