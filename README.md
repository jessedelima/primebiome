# PrimeBiome - Página de Apresentação

Este projeto é uma landing page estática para apresentação do PrimeBiome, com foco em responsividade, performance básica e conversão.

## Como visualizar
- Abra diretamente o arquivo: `index.html`
- No Windows: clique duas vezes no arquivo no Explorer ou use `file:///c:/Users/User/Documents/Projets/primebiome2.0/index.html` no navegador.

## Estrutura atual
- `index.html`: página principal
- `assets/` e `js/`: pastas com arquivos de suporte (scripts). A página está referenciando o script em `assets/js/main.js`.
- Se preferir manter `main.js` ao lado do `index.html`, basta alterar a linha de inclusão do script no final do `index.html` para `src="main.js"` ou `src="js/main.js"`, conforme a sua organização.

## Responsividade
- Menu móvel: botão “Menu” em telas pequenas abre/fecha a navegação.
- Layout usa classes do Bootstrap e CSS próprio para grid e espaçamentos.
- Imagens possuem `max-width: 100%` e `height: auto`.

## JavaScript (funcionalidades)
- Acordeão do FAQ: abre/fecha respostas ao clique e atualiza estados ARIA para acessibilidade.
- Clique global em imagens fora de links: redireciona para `LNK2` (checkout principal).
- Cards de preço: redirecionam para `LNK1`, `LNK2` e `LNK3`.

### Editar links de checkout
No arquivo `main.js`, ajuste as constantes:
```js
const LNK1 = "https://www.checkout-ds24.com/product/604071?aff=SEU_AFILIADO";
const LNK2 = "https://www.checkout-ds24.com/product/583059?aff=SEU_AFILIADO";
const LNK3 = "https://www.checkout-ds24.com/product/583058?aff=SEU_AFILIADO";
```

## Conteúdo e seções
- Herói: título e descrição principal.
- Ingredientes: lista com imagens e rótulos.
- FREE Bonuses: seção com os bônus dos 6 frascos.
- Ofertas: três cards com preços e benefícios.
- FAQ: perguntas frequentes com acordeão.
- Rodapé com direitos autorais.

## Performance e acessibilidade
- `loading="lazy"` em imagens não críticas para reduzir uso de banda.
- `alt` descritivo nas imagens principais.
- Botões do FAQ usam `type="button"`; estados ARIA são atualizados no clique.

## SEO
- O `index.html` usa a meta `robots` com `noimageindex, nofollow, nosnippet`. Isso é ideal para páginas de campanha não indexáveis. Caso deseje melhorar SEO orgânico, remova ou ajuste essa meta.
- Ajuste o `<title>` e eventuais meta descriptions conforme sua estratégia.

## Como mudar textos
- Altere diretamente no `index.html`. Exemplo de alteração feita:
  - Pergunta “What is your money back guarantee?” atualizada para:
    “Our money-back guarantee is a risk-free option we are offering you because we believe in this formula so much. It means you can try PrimeBiome for a full 60 days. And if you are not completely convinced by the amazing results, then you just get your money back.”

## Trocar a localização do JS
- Se quiser manter `main.js` ao lado do `index.html`, atualize a tag de script no final do `index.html`:
  - `<!-- Atual --> <script src="assets/js/main.js" defer></script>`
  - `<!-- Alternativas --> <script src="main.js" defer></script>` ou `<script src="js/main.js" defer></script>`

## Manutenção
- Evite duplicidade de scripts. Centralize o arquivo JS que está sendo usado e garanta que o `src` do HTML aponta para ele.
- Para testes rápidos, abra o `index.html` e use as ferramentas do navegador (DevTools) para verificar erros de console ou rede.

