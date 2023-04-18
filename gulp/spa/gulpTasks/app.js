const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

function appHTML(cb) {
    return gulp.src('src/**/*.html') // selecionando todos arquivos html dentro de src e subpastas
        .pipe(htmlmin({collapseWhitespace: true})) // removendo espaços em branco
        .pipe(gulp.dest('build'))
}
function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}
function appJS() {
    return gulp.src('src/assets/js/**/*.js') // selecionando todos arquivos JS dentro de js e subpastas
        .pipe(babel({presets: ['ENV']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/assets/js'))
}
function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*') // pegando todas as imagens (PNG, JPG, JPEG entre outros) dentro de imgs e subpastas
        .pipe(gulp.dest('build/assets/imgs'))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}