# DESIGN_SYSTEM — OW Hero Journal

## Produto e escopo
Um diário de decisões para evoluir com cada herói. A aplicação é um diário pessoal com dados **manuais**, sem banco, autenticação, API de jogo ou pontuações oficiais. Exemplos são rotulados como fictícios e carregados somente por ação explícita.

## Taste Skill / tokens
Fonte única em `styles.css`: `--bg #101b29`, `--accent #8de1ef`, `--accent-two #f4b985`, cores de superfície, `--focus`, `--space-1/2/3/4/6/8/12/16` (4–64px), raios 10/18/30 px. Tipografia nativa e títulos fluidos.

## Web Design Guidelines
Layout responsivo, teclado e foco visível, links semânticos, salto ao conteúdo, campos com rótulos, atualização de status via `aria-live`, confirmação para exclusões/importação destrutiva e `prefers-reduced-motion`. Dados pessoais nunca são enviados e são inseridos com `textContent` para evitar HTML injetado.

## Awesome Design / Image to Code
O repositório original era somente um README de concepção, sem telas nem capturas preexistentes. Por isso o redesenho visual é um **projeto original**, com emblema CSS, favicon SVG e layout de cartões; não há alegação de conversão de imagens que não foram fornecidas.

## Dados, limitações e comparação
Cada registro é validado conforme os campos do produto; backups versionados `{app,version,entries}`, máximo 250 registros, limite de 1 MB para importação. Chave LocalStorage `ow-hero-journal-v1`. Dados guardados localmente, sem criptografia ou sincronização.

**Análise:** agrupamento de registros para revisão pessoal, nunca métricas importadas da API.

## QA e GitHub Pages
GitHub Actions executa testes estáticos e Playwright em 320, 390, 768, 1366, 1600 px, capturas de página inteira, fluxos de exemplos, edição, persistência, exportação, exclusão e overflow. Publicação estática por `gh-pages/(root)` sem build de runtime; a configuração de Pages da conta pode exigir habilitação manual.

## Diferenciação visual — 27/10/2026
**Layout original do produto, não tema copiado.** Relatório pós-partida editorial: manchete tipográfica laranja, linha do tempo vertical e formulário escuro. O arquivo `identity.css` contém a identidade sem alterar armazenamento ou componentes funcionais. Resoluções críticas: 320, 390, 768, 1366 e 1600 pixels. Contraste/foco mantidos e movimento reduzido respeitado.

## Central de treinamento por herói
Cada herói recebe uma ficha de briefing baseada no exercício mais recente do próprio histórico. Botão `Ver histórico` filtra as partidas pelo herói; `Preparar treino` inicia rascunho com herói, função e exercício, sem salvar indevidamente nova partida. Não há classificação automática nem mudança do schema de dados. Playwright exercita os dois botões.
