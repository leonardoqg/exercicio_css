const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilação do SASS
gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('dist/css'));
});

// Compressão de imagens
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Compressão de código JavaScript
gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executa todas as outras
gulp.task('default', gulp.parallel('sass', 'images', 'scripts'));
