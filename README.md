# Styr Glyph

[![build status](
https://gitlab.com/styrcss/styr-glyph/badges/trunk/build.svg)](
https://gitlab.com/styrcss/styr-glyph/commits/trunk)


## Repository

https://gitlab.com/styrcss/styr-glyph


## Install

```zsh
% npm install styr-glyph --save
```

## Usage

See `static/index.html`.

```html
<link rel="stylesheet" href="/path/to/styr-glyph.css">
...
<!-- as an i tag -->
<i class="glyph glyph-wolf-paw"></i>

<!-- or as a span tag -->
<span class="glyph glyph-NAME"></span>

<!-- or use raw CSS as you want -->
<style>
i.paw {
  font-family: 'Styr-Glyph';
  content: '\ea01';
}
</style>
```


## Development

### Setup

```zsh
% npm install
```

### Check

```zsh
# check gulpfile.js
% npm run lint
```

### Build

```zsh
# build
% npm run build
% NODE_ENV=production npm run build
```

### Run development server

```zsh
# use express
% node server.js
```


## License

`MIT`

```txt
Styr Glyph
Copyright (c) 2023 Yasuhiro Яша Asaka
```

See [LICENSE](LICENSE).
