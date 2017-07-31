var gulp = require('gulp'),
plugins  = require('gulp-load-plugins')({
      pattern: '*',
      camelize: true
    }),
spawn    = require('child_process').spawn,
app      = './',
dist     = '../www/',
assets   = dist + 'assets/';

var htmlSource,
    htmlPartialSource,
    htmlThemeSource,
    sassStyle,
    sassSource,
    themeImgSource,
    svgSource,
    fontSource,
    jsSource,
    jsVendorSource;

var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  sassStyle = 'expanded';
} else {
  sassStyle = 'compressed';
}

htmlSource        = app + 'html/pages/**/*.html';
htmlPartialSource = app + 'html/partials/**/*.html';
htmlThemeSource   = app + 'html/theme/**/*.html';
sassSource        = app + 'sass/**/*.scss';
themeImgSource    = app + 'images/**/*';
svgSource         = app + 'svg/*.svg';
fontSource        = app + ['fonts/**/*', '!fonts/*.md'];
jsVendorSource    = app + './js/vendor/*.js';
jsSource          = [
  './js/plugins/*.js',
  './js/scripts/global/*.js',
  './js/scripts/common/*.js',
  './js/scripts/products/*.js',
  './js/scripts/forms/*.js',
  './js/scripts/*.js',
  './js/scripts.js',
];

/*
 * HTML
 */
gulp.task('html', function() {
  return gulp.src([htmlSource, htmlThemeSource])
    .pipe(plugins.fileInclude({
      prefix: '@@',
      indent: true
    }))
    .pipe(gulp.dest(dist));
});

/*
 * SASS
 */
gulp.task('sass', function() {
  return gulp.src(sassSource)
    .pipe(plugins.plumber())
    .pipe(plugins.if(env === 'development', plugins.sourcemaps.init()))
    .pipe(plugins.sassGlob())
    .pipe(plugins.sass({
      outputStyle: sassStyle
    }).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      cascade: false,
      remove: false
    }))
    .pipe(plugins.if(env === 'development', plugins.sourcemaps.write()))
    .pipe(gulp.dest(assets + 'css'));
});

/*
 * IMAGE OPTIMIZATION
 */
gulp.task('img', function() {
  return gulp.src(themeImgSource)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(assets + 'css/images'));
});

/*
 * SVG SPRITE
 */
gulp.task('svg', function() {
  return gulp.src(svgSource)
    .pipe(plugins.rename(function(opt) {
      // opt.basename = 'icon-' + opt.basename.split(/_(.+)/)[1];
      opt.basename = 'icon-' + opt.basename.replace(/_/g, '-');
      return opt;
    }))
    .pipe(plugins.svgmin())
    .pipe(plugins.svgstore({ inlineSvg: true }))
    .pipe(plugins.cheerio({
      run: function ($, file) {
          $('svg').addClass('hidden');
          $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(plugins.rename('icons.svg'))
    .pipe(gulp.dest(assets + 'images'));
});

/*
 * FONTS
 */
gulp.task('fonts', function() {
  return gulp.src(fontSource)
    .pipe(gulp.dest(assets + 'css/fonts'));
});

/*
 * SCRIPTS
 */
gulp.task('js', function() {
  return gulp.src(plugins.mainBowerFiles().concat(jsSource))
    .pipe(plugins.plumber())
    .pipe(plugins.filter('*.js'))
    .pipe(plugins.concat('scripts.js'))
    .on('error', plugins.util.log)
    .pipe(plugins.if(env === 'production', plugins.uglify()))
    .pipe(gulp.dest(assets + 'js'));
});

/*
 * VENDOR SCRIPTS
 */
gulp.task('jsVendor', function() {
  return gulp.src(jsVendorSource)
    .pipe(plugins.uglify())
    .pipe(gulp.dest(assets + 'js/vendor/'));
});

/*
 * GULP
 */
gulp.task('auto-reload', function() {
    spawn('gulp', [], {stdio: 'inherit'});
    process.exit();
});

gulp.task('default', ['html', 'sass', 'img', 'svg', 'fonts',  'js', 'jsVendor'], function() {

  /*
   * Browsersync options
   * http://www.browsersync.io/docs/options
   */
    plugins.browserSync({
        files: [
          dist
        ],
        server: {
          baseDir: dist
        },
        open: 'local',
        browser: 'safari',
        // browser: ['safari', 'google chrome', 'firefox'],
        logFileChanges: false
    });

  /*
   * Watch Files
   */
    gulp.watch([htmlSource, htmlPartialSource, htmlThemeSource], ['html']);
    gulp.watch(sassSource, ['sass']);
    gulp.watch(themeImgSource, ['img']);
    gulp.watch(svgSource, ['svg']);
    gulp.watch(jsSource, ['js']);
    gulp.watch('gulpfile.js', ['auto-reload']);
});
