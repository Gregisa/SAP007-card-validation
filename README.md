Card Validation Project -Point de Cannes-

## SUMÁRIO

- [1. Introdução](#1-Introdução)
- [2. Funcionamento](#2-Funcionamento)
- [3. Protótipos](#3-Protótipos)
- [4. Planejamento do Projeto](#4-Planejamento)
- [5. Aprendizado](#5-O-que-aprendi)
- [6. Ferramentas Ultilizadas ](#6-Ferramentas)
- [7. Sobre a autora] (#7-Autora)



## 1. Introdução

A proposta do projeto Card Validation deu origem à aplicação Point de Cannes, uma plataforma de streamming voltada pra usuários cinéfilos e também espectadores que buscam conhecer mais do cinema, para além da bolha hollywoodiana. 
O serviço de streamming oferece aos novos usuários um teste gratuito de 30 dias para ser usuário Prèmiere, tendo acesso a conteúdos exclusivos e catálogos de filmes independetes e recém estreiados.

O wireframe apresentado na página é uma mensagem informando que esse teste gratuito expirou, e que para que o usuário continue sendo Prèmiere, deve informar um número válido de cartão de crédito.


## 2. Funcionamento

A base da validção do cartão é feita a partir do algorítimo de Luhn, (https://en.wikipedia.org/wiki/Luhn_algorithm) 

Esse algorítmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

[gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png).

Além disso, os dígitos devem ser mascarados (exceto os últimos 4), por questões de segurança. O cartão sendo válido, o usuário continua Prèmiere, caso contrário, terá que digitar outro número que seja válido.

## 3. Protótipo

PROTÓTIPO 1:
Assim que decidi qual seria o projeto que faria (tinham duas opções), já imaginei o layout e fiz num papel:


<inserir imagem protótipo papel>

Porém, esse primeiro layout tinha um problema: o foco desse projeto. Para fazer um cartão de crédito usando CSS e HTML, a demanda de tempo e dedicação seria grande (não impossível). Como minha meta para essa aplicação era ter mais domínio de JavaScript, percebi que seria mais proveitoso manejar o tempo entregando um layout mais simples, mas que tivesse funcionalidades, e que eu entendesse como elas funcionam.


PROTÓTIPO 2:
Com os pés mais no chão, despus de um tempo pra colocar em prática minhas habilidades com CSS e HTML,criando um layout menos robusto, mas que ainda tivesse sentido e se relacionasse com o tema da minha aplicação:

<inserir imagem protótipo 2>

Esse layout já foi feito pela ferramenta Mockflow, busquei entregar algo que ao menos tivesse conteúdo disponível que envolvesse cinema para ser acessado por links no navegador, já que focaria meu tempo desenvolvendo a lógica de programação.

A escolha da cor de fundo foi pensada a partir do tapete vermelho visto frequentemente em grandes premiações do cinema, já os detalhes da página tem cores amarelo claro que remetem ao dourado dos prêmios e troféus em si. 

## 4 .Planejamento do Projeto

O projeto Card Validation(Point de Cannes) tinha, preferencialmente, duração de 2-3 semanas para ser executado, desde protótipo, passando por código e testes. 

Para me planejar ultilizei a ferramenta Trello, que auxilia na parte de divisão de tarefas entre 'A fazer', 'Fazendo' e 'Feito'. Assim, tive auxílio para entender os pequenos passos que deveria tomar para construir o projeto e como administrar o tempo para ser produtiva, sem sobrecarregar.

Também foi importante o uso da planilha da Daily, que usamos em todos os dias de aula do bootcamp, para assim conseguirmos executar as tarefas colocando em perspectiva o que já fizemos e onde queremos chegar.

## 5.Aprendizado

Como já dito acima, meu objetivo principal nesse projeto era compreender mais lógica de programação num todo, então foquei menos no layout. Muito mais que isso, queria entender como a linguagem JavaScript funciona no detalhe, o uso e manipulação de DOM, funções, condições e loops.

Acho que além da parte técnica, começei a aprender a manejar melhor o tempo e fazer planejamento para não desperdiçar as sprints. Isso é muito valioso e com certeza levarei para os prõximos projetos. 

## 6.Ferramentas Ultilizadas

## Código:
-Visual Studio Code;
-Git. e Github (controle de versão e armazenamento em repositório).

## Protótipo:
-Mockflow.

## Organização:
-Trello.

## Comunicação:
-Slack;
-Zoom;
-AnyDesk(para que uma colega pudesse acessar minha máquina e entedesse um problema no terminal).

## 7.Sobre a autora

Oi, me chamo Isabela e estou em transição de carreira desde 2021. Sempre gostei de aprender outros idiomas, e quando conheci o mundo da programação encontrei um meio de conhecer a linguagem das máquinas. É um mundo extenso, complexo e desafiador, tudo que me encanta. Comecei minha jornada na Laboratoria na turma 007-2022 e esse é meu primeiro projeto solo :⁾)








