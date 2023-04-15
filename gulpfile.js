'use strict';

const path = require('path')
    ;

const { dest, series, src, watch } = require('gulp')
    ;

const _clean = require('gulp-clean')
    , _copy = require('gulp-copy')
    , consolidate = require('gulp-consolidate')
    , iconfont = require('gulp-iconfont')
    ;

const build = function() {
  return src('src/svg/*.svg')
    .pipe(iconfont({
      fontName: 'styr-glyph'
    , prependUnicode: true
    , formats: ['ttf', 'eot', 'woff', 'woff2']
    , appendCodepoints: true
    , appendUnicode: false
    , normalize: true
    , fontHeight: 1000
    , centerHerizontally: true
    }))
    .on('glyphs', function(glyphs, options) {
      // capitalize
      const fontName = options.fontName.replace(/\b\w/g, function(c) {
        return c.toUpperCase();
      });

      // generate icon css
      src('src/css/glyph.css')
        .pipe(consolidate('underscore', {
          glyphs
        , fontName
        , fontPath: '../font/'
        , className: 'glyph'
        , fontDate: new Date().getTime()
        }))
        .pipe(dest('dst/css'));

      // generate icon list template for application
      src('src/index.html')
        .pipe(consolidate('underscore', {
          glyphs
        , fontName
        }))
        .pipe(dest('static/'));
    })
    .pipe(dest('dst/font'));
};

const copy = function() {
  return src(path.resolve('src', 'style.css'))
    .pipe(_copy('static', {prefix: 2}));
};

const clean = function() {
  return src([
    'dst/*'
  ], {
    read: false
  })
  .pipe(_clean());
};

exports.default = exports.build = function(cb) {
  const nodeEnv = process.env.NODE_ENV || 'development';
  console.log('» gulp:', nodeEnv);

  const tasks = [clean, build, copy];
  return series(...tasks)(cb);
};

exports.clean = clean;
