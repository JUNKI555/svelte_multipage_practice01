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
see `rollup.config.js`.
rollup outputs first.js/css and second.js/css.
index.html loads first.js/css.
second.html loads first.js/css.

## 説明(日本語)
Svelteファイルの出力を分けるのはSvelteの責務ではなく
rollup.js の構成で制御できる。詳しくは `rollup.config.js` を参照。
ビルド設定をを配列で指定することで複数の入力と出力を制御できる。
複数の出力に対して、それを複数のhtmlで読み込むことで
複数ページによるSvelteアプリをroutingなしに実現できる。
