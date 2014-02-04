# Angular/Compass Seed


## Initial Setup

Install Ruby [OSX](https://www.ruby-lang.org/en/downloads/)/[Windows](http://rubyinstaller.org/downloads/)

Install [Node.js](http://nodejs.org/) and [Bundler](http://bundler.io/).

```
gem install node
gem install bundler
```

The following installs should be run from the project folder.

Install all Ruby dependencies defined in Gemfile:

```
bundle install
```

Install all nodeJs dependencies defined in package.json:

```
npm install
```

Install all Bower dependencies defined in bower.json:

```
bower install
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


## Major components:

* [AngularJS](http://angularjs.org/)
  * [generator-angular](https://npmjs.org/package/generator-angular)
* [Modernizr](http://modernizr.com/)
* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [CSS Normalize](https://github.com/necolas/normalize.css/)
* [SCSS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [nodeJS](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)
* [Bower](https://github.com/bower/bower)
* [Karma](http://karma-runner.github.io/0.10/index.html)
* [Jasmine](https://github.com/pivotal/jasmine)


## License

* Copyright 2014 EPAM Empathy Lab. All rights reserved.
