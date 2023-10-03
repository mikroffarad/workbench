const gulp = require('gulp');

// Tasks
require('./gulp/devMode.js');
require('./gulp/docsMode.js');

gulp.task(
    'default',
    gulp.series(
        'clean:dev',
        gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
        gulp.parallel('server:dev', 'watch:dev')
    )
)

gulp.task(
    'docs',
    gulp.series(
        'clean:docs',
        gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
        gulp.parallel('server:docs', 'watch:docs')
    )
)