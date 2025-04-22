# Engenheiros da Vila

## 📖 Visão Geral

O **Engenheiros da Vila** é um projeto acadêmico desenvolvido para a disciplina *Web Standards and Game Developing* do 1º ano do curso de Sistemas de Informação da FIAP. O objetivo principal é criar um site que apresente o robô "Sentinela", desenvolvido para a competição *Robocup FIAP* e inspirado no jogo *Bloons TD 6*. O site não apenas promove o robô, mas também detalha o processo de construção, a equipe, a competição e inclui um jogo interativo chamado *Space Fighters*, onde dois robôs competem em uma arena virtual.

O projeto foi estruturado em quatro entregas (sprints), cada uma adicionando funcionalidades e refinando o site, desde o protótipo inicial até a implementação de um jogo em JavaScript. O site é responsivo, utiliza boas práticas de código semântico e integra o framework Bootstrap para componentes interativos.

## 🎯 Funcionalidades

### 1. **Apresentação do Robô (Sentinela)**
- Página dedicada (`roboeprojeto.html`) com um storytelling sobre o robô, inspirado no personagem "macaco engenheiro" do jogo *Bloons TD 6*.
- Descrição do sistema de armas, que utiliza agulhas ativadas por sensores para estourar balões de oponentes.
- Carousel Bootstrap com 8 imagens ilustrando as etapas de construção do robô.
- Accordion Bootstrap detalhando o planejamento, componentes e montagem do robô.

### 2. **Jogo Interativo: Space Fighters**
- Implementado em `ojogo.html` e `script.js`.
- Arena de luta onde dois robôs (Sentinela e PixelsBot) se movem usando as teclas `WASD` (Sentinela) e setas (PixelsBot).
- Mecânica de colisão: cada colisão reduz a vida dos robôs (dano aleatório entre 0 e 20). Após 5 colisões ou quando a vida de um robô chega a 0, o jogo declara o vencedor.
- Interface com contadores de colisões e vida, além de um modal que exibe o vencedor.

### 3. **Sobre a Equipe**
- Página `equipe.html` apresenta os membros da equipe (Fernando, João Henrique, Luan Rodrigues, Mauro, Vitória Ribeiro) e a missão do grupo de promover robótica educacional no Brasil.
- Integração de elementos visuais, como GIFs, para reforçar o tema de inovação.

### 4. **Apresentação da Robocup e NEXT FIAP Festival**
- Seção em `index.html` com links para o site oficial do *NEXT FIAP Festival* e da *Robocup*, destacando a importância desses eventos para inovação e tecnologia.
- Cards Bootstrap com links para a FIAP, Alura e informações sobre o curso de Sistemas de Informação.

### 5. **Manual de Aventuras**
- Em `jogos.html`, uma seção narrativa que guia o usuário pelo processo de construção de um robô autônomo com Arduino Mega, dividida em capítulos com imagens e descrições detalhadas.

### 6. **Projeções de Mercado**
- Páginas `contato.html` e `projecao.html` apresentam dados de pesquisa sobre o interesse em robótica educacional no Brasil, com gráficos e análises.
- Foco em escolas urbanas, comparação com o mercado internacional e estimativas de investimento por faixa de renda e cidade.

### 7. **Formulário de Contato e Login**
- Página `contato.html` com um formulário para potenciais sócios, redirecionando para `login.html`.
- Sistema de login simples (`login.js`) que verifica uma senha fixa ("123456") e redireciona para `projecao.html` com informações exclusivas.

### 8. **Responsividade e Navegação**
- Menu de navegação funcional em todas as páginas, com links para "Início", "O Robô", "Jogos", "Sobre nós" e "Seja nosso sócio".
- Design responsivo para dispositivos móveis, tablets e desktops, utilizando o sistema de grid do Bootstrap.
- Botão de menu hambúrguer para navegação em telas menores.

### 9. **Rodapé**
- Rodapé consistente em todas as páginas com a marcação de direitos autorais: "© 2023/2024 - Engenheiros da Vila".

## 🛠 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do site.
- **CSS3**: Estilização personalizada, com paleta de cores definida e uso de Google Fonts (Poppins e Honk).
- **JavaScript**: Lógica do jogo *Space Fighters* e interatividade do menu responsivo.
- **Bootstrap 5.3**: Componentes como Carousel, Accordion, Cards, Forms, Ratios (para vídeos) e sistema de Grid.
- **Google Fonts**: Fontes Poppins (principal) e Honk (detalhes no jogo).
- **Netlify/GitHub Pages**: Hospedagem do site (recomendado na entrega).
- **YouTube**: Hospedagem de vídeos de 30 segundos mostrando a construção e movimento do robô (não incluídos no código, mas referenciados).

## 📁 Estrutura do Projeto

A pasta do projeto segue a organização recomendada, com o nome do robô ("Sentinela") como base:

```
sentinela/
├── img/                    # Imagens do site (logo, GIFs, carousel, etc.)
│   ├── carousel/           # Imagens do carousel
│   ├── jogo/               # Imagens do jogo Space Fighters
│   ├── manual/             # Imagens do Manual de Aventuras
│   ├── projeções/          # Imagens das projeções de mercado
│   └── favicon.ico.png     # Ícone do site
├── styles/                 # Arquivos CSS
│   ├── contato.css
│   ├── equipe.css
│   ├── jogos.css
│   ├── login.css
│   ├── ojogo.css
│   ├── orobo.css
│   ├── projecao.css
│   └── style.css
├── contato.html            # Página de contato
├── equipe.html             # Página da equipe
├── index.html              # Página inicial
├── jogos.html              # Página de jogos e manual
├── login.html              # Página de login
├── ojogo.html              # Página do jogo Space Fighters
├── projecao.html           # Página de projeções de mercado
├── roboeprojeto.html       # Página do robô Sentinela
├── login.js                # Script do login
├── script.js               # Script do jogo Space Fighters
└── README.md               # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, etc.).
- Editor de código (VS Code, Sublime Text, etc.) para visualizar/editar os arquivos.
- Conexão com a internet para carregar fontes do Google Fonts e CDN do Bootstrap.

### Passos
1. **Clone ou baixe o projeto**:
    - Baixe o arquivo zipado do projeto ou clone o repositório (se hospedado no GitHub).
    - Descompacte a pasta `sentinela`.

2. **Abra o projeto localmente**:
    - Navegue até a pasta do projeto.
    - Abra o arquivo `index.html` em um navegador para acessar a página inicial.
    - Alternativamente, use uma extensão como *Live Server* no VS Code para rodar o site localmente.

3. **Hospedagem (opcional)**:
    - Para hospedar o site, use serviços como Netlify ou GitHub Pages:
        - **Netlify**: Faça upload da pasta do projeto no painel do Netlify ou conecte ao repositório Git.
        - **GitHub Pages**: Crie um repositório no GitHub, envie os arquivos e ative o GitHub Pages nas configurações do repositório.
    - Após a hospedagem, o site estará acessível via URL fornecida pelo serviço.

4. **Teste o jogo**:
    - Acesse a página `ojogo.html` pelo menu "Jogos".
    - Use as teclas `WASD` para controlar o robô Sentinela e as setas para controlar o PixelsBot.
    - Teste colisões e verifique o modal de vencedor após 5 colisões ou quando a vida de um robô chegar a 0.

## 📝 Notas Adicionais

- **Vídeos**: Os vídeos de 30 segundos (construção e movimento do robô) foram hospedados no YouTube, conforme exigido, mas não estão diretamente incluídos no código fornecido. Eles podem ser integrados na página `roboeprojeto.html` usando o componente *Ratios* do Bootstrap.
- **Responsividade**: O site foi testado para funcionar em dispositivos móveis, tablets e desktops, com ajustes no menu e layout via CSS e Bootstrap.
- **Limitações**: O login (`login.js`) usa uma senha fixa ("123456") para fins acadêmicos. Em um ambiente de produção, seria necessário implementar autenticação segura.
- **Entregas**: O projeto atende aos requisitos das 4 entregas, incluindo o protótipo inicial, codificação em HTML/CSS, integração de Bootstrap e desenvolvimento do jogo em JavaScript.

## 👥 Equipe

- Fernando
- João Henrique
- Luan Rodrigues
- Mauro
- Vitória Ribeiro

## Desenvolvedores do site
- Luan Rodrigues (Estrutura do site, design, layout, html, css, js, documentação)
- João Henrique (Responsividade e jogo)

## 📚 Disciplina

- **Matéria**: Web Standards and Game Developing
- **Curso**: Sistemas de Informação
- **Instituição**: FIAP
- **Ano**: 1º ano (2023/2024)

## 🔗 Links Úteis

- [FIAP](https://www.fiap.com.br/)
- [NEXT FIAP Festival](https://www.fiap.com.br/next/)
- [Robocup FIAP](https://www.fiap.com.br/2017/10/23/robocup-3/)
- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/)
- [Google Fonts](https://fonts.google.com/)

---
