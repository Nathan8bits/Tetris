# Tetris


![Capa do jogo Tetris](https://drive.google.com/file/d/14gRsvWElNyg_WdlofgCge27EwSRGhgsn/view?usp=drivesdk)

# Tetris Game

Este projeto é uma implementação do clássico jogo de Tetris utilizando JavaScript e manipulação do DOM (Document Object Model).

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Para executar este projeto, basta clonar o repositório e abrir o arquivo `index.html` em seu navegador.

## Uso
Use os botões de controle na interface do usuário para rotacionar e mover as peças:

- Rotação: Botão triangular para rotacionar a peça.
- Esquerda: Botão para mover a peça para a esquerda.
- Direita: Botão para mover a peça para a direita.
- Baixo: Botão para mover a peça para baixo.

## Estrutura do Projeto

- index.html: Contém a estrutura HTML do jogo.
- style.css: Contém os estilos CSS para o jogo.
- script.js: Contém a lógica do jogo Tetris.
- controleEstado.js: Módulo com funções auxiliares para controle do estado do jogo.

## Funcionalidades

- Criação de Tabuleiro: Inicializa um tabuleiro de Tetris com 10 colunas e 20 linhas.
- Controle de Peças: Permite rotacionar, mover para a esquerda, direita e para baixo as peças do Tetris.
- Detecção de Colisão: Verifica se há colisão entre as peças em movimento e as peças já fixadas.
- Atualização de Pontuação: Atualiza a pontuação sempre que uma linha é completada e removida.
- Queda Automática das Peças: As peças caem automaticamente em intervalos regulares.

## Contribuição

- Faça um fork do projeto.
- Crie uma nova branch (git checkout -b feature/AmazingFeature).
- Commit suas mudanças (git commit -m 'Add some AmazingFeature').
- Push para a branch (git push origin feature/AmazingFeature).
- Abra um Pull Request.
