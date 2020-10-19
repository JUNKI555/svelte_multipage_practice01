# svelte multipage practice01

## Test
`yarn dev`

## Configurations
- public
  - index.html
  - second.html
  - build (need `yarn dev`)
    - first.js
    - first.css
    - second.js
    - second.css
- src
  - first.ts
  - FirstApp.svelte
  - second.ts
  - SecondApp.svelte

## Explanation(EN)
see `rollup.config.js`.<br>
rollup outputs first.js/css and second.js/css.<br>
index.html loads first.js/css.<br>
second.html loads first.js/css.<br>
<br>
rollup supports code splitting build.<br>
but code splitting build does not applicable this case.

## 説明(日本語)
Svelteファイルの出力を分けるのはSvelteの責務ではなく<br>
rollup.js の構成で制御できる。詳しくは `rollup.config.js` を参照。<br>
ビルド設定をを配列で指定することで複数の入力と出力を制御できる。<br>
複数の出力に対して、それを複数のhtmlで読み込むことで<br>
複数ページによるSvelteアプリをroutingなしに実現できる。<br>
<br>
rollup は code splitting build が可能だが、<br>
今回のようなケースはブラウザ上の即時実行関数として出力したい(IIFE build)ので適用できない。

## reference
- Rollup.js cheatsheet - devhints.io
  - https://devhints.io/rollup
- github-card/rollup.config.js
  - https://github.com/reddec/github-card/blob/master/rollup.config.js#L9
