# AngularJS/Compass Seed Project


## Initial Setup

Install [Bundler](http://bundler.io/) and [Grunt](http://gruntjs.com/getting-started).
```
gem install bundler
npm install -g grunt-cli
```

Clone the project:
```
git clone git@bitbucket.org:bluehazetech/angular-compass-seed.git
```

The following commands should be run from the new "angular-compass-seed" folder.

Install all Ruby dependencies defined in Gemfile:
```
bundle install
```

Install all nodeJS dependencies defined in package.json:
```
npm install
```


## Development

For live development:

```
grunt dev
```

To render your static file output to the ```/dist/``` directory:

```
grunt dist
```

To run Jasmine tests:

```
grunt test
```


## End to end testing

We recommend using [protractor](https://github.com/angular/protractor) for end-to-end tests. It
uses native events and has special features for Angular applications.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run:
  * run the tests from console with [Protractor](https://github.com/angular/protractor) via
    `scripts/e2e-test.sh` (on windows: `scripts\e2e-test.bat`)


## Major components:

* [AngularJS](http://angularjs.org/)
* [Modernizr](http://modernizr.com/)
* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [CSS Normalize](https://github.com/necolas/normalize.css/)
* [SCSS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [nodeJS](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)
* [Karma](http://karma-runner.github.io/0.10/index.html)
* [Jasmine](https://github.com/pivotal/jasmine)


## Directory Layout

    app/                --> all of the files to be used in production
      fonts/            --> font files
      images/           --> image files
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html
      scripts/          --> javascript files
        controllers/    --> application controllers
        directives/     --> application directives
        filters/        --> custom angular filters
        services/       --> custom angular services
        app.js          --> application
      styles/           --> scss files
        main.scss           --> primary scss file
      vendor/           --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      index.html        --> app layout file (the main html template file of the app)

    config/             --> application and test configurations
      karma.conf.js         --> config file for running unit tests with Karma
      protractor-conf.js    --> config file for running e2e tests with Protractor

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)

    test/               --> test source files and libraries
      e2e/              -->
        scenarios.js    --> end-to-end specs
      unit/                     --> unit level specs/tests
        controllers/            --> specs for controllers
        directivess/            --> specs for directives
        filters/                --> specs for filters
        services/               --> specs for services
      vendor/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file


## License

* Copyright 2014 Blue Haze Technologies, LLC. All rights reserved.
