(function (global) {
    System.config({
        paths: {
            'npm:': '../../angular2/node_modules/'
        },
        map: {
            app: 'vendor/application',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'ng2-datetime-picker':'npm:ng2-datetime-picker/dist/ng2-datetime-picker.umd.js',
            'ng2-file-upload':'npm:ng2-file-upload',
            'moment':'npm:moment',
            'rxjs': 'npm:rxjs',
            'ngx-tooltip': 'node_modules/ngx-tooltip',
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            moment: {
              defaultExtension: 'js'
          },
          'ng2-file-upload': {
              defaultExtension: 'js'
          },
          'ngx-tooltip': { main: "index.js", defaultExtension: "js"}
        }
    });
})(this);
