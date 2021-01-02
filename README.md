# Linha-de-comando-nodejs
Criando uma Ferramenta de Linha de comando com node js 

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#sobre) 
   * [Instalação](#instalacao)
   * [Terminal](#terminal)
   * [Tests](#testes)
<!--te-->

## Sobre 

  Um projeto utilizando node.js para criação do uma linha de comando, passando parametrôs no terminal
  pode ser realizado um CRUD, foi também implementado
  casos de testes para validar cada funcionalidade. 

## Instalação 

  Para que você possa rodar esse projeto é necessario que você tenha instalado o npm ou yarn e que tenha também o node intalado em sua maquina, após a instação de deles, clone esse projeto e depois veja no tópico terminal os comandos que podem ser 
  executados.

##  Terminal

  Para realizar qualquer operação do CRUD é necessario abrir o terminal de sua preferencia na pasta do projeto, exemplo D:\Node\linha-de-comando-nodejs, 
  feito isso agora é só fazer realizar os comandos e se
  divertir.

  Ajuda: Esse comando informará no seu console uma lista das opções que podem ser relizadas 

    node index.js --help ou node index.js -h

 Cadastrar: Esse comando realizada um cadastro de um personagem

    node index.js -c -n [Nome do Personagem] -cl [Classe do personagem] -p [Passiva do Personagem]

    Exemplo
    node index.js -c -n Fresh -cl Ladino -p Invisibilidade

Listar: Esse comando lista todos os personagem já cadastrados

    node index.js -l 

Remover: Esse comando pode remover todos os personagem já cadastrados ou somente um personagem

Removendo todos os personagens

    node index.js -r 

Removendo somente um personagem

    node index.js -r -i [id do personagem a ser remover]
    
    Exemplo

    node index.js -r -i 1609597732690

Atualizar: Esse comando atualiza um personagem

    node index.js -a [Id do personagem] -n [Nome do personagem] -cl [Classe do personagem] -p [Passiva do personagem]

    Exemplo 

    node index.js -a 1609597732690 -n Batman -cl "Sem classe" -p Dinheiro 

Pode também ser passado somente um parametro após o id 
com isso só atualizaria o campo que você está passando 
como por exemplo atualizar somente a classe do personagem 

    node index.js -a [Id do personagem] -cl [Nome da Classe]

    Exemplo

    node index.js -a 1609597732690 -cl Guerreiro

# Testes

  Foi implementado casos de testes para cada uma das opeações do crud, e para rodar os teste é bem simples basta somente executar em seu terminal o seguinte comando 


    mocha test.js ou npm t

 Dois lembretes a ordem dos fatores pode afetar no caso de alguns teste por exemplo caso não tenha personagens ele pode não lista e vai ocorrer um erro.  
 
 É necessaria instalar o mocha globalmente em sua maquina para realizar o comando acima.  