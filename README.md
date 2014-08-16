## React Component Boilerplate

Develop react components quickly with Mocha & Chai. Jest is awesome, but the tests are far too slow for react components. Based on the following [Gulp file](http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/) we can achieve continous tests using Livereload that are incredibly fast as well.  Running your tests in the browser eliminates quite a few headaches and you get the benefit of dev tools as well.

### Install

* Clone the repo
* Run `npm install`
* Open `build/index.html`

### Development
* Run `gulp`
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder

### Tests
* Run `gulp test -'./tests/checkboxWithLabel-test.js'
* Open `test.html`
* Any changes done to the test file or files in `app` folder will autoreload the browser

### Run all tests with Karma
* Run `npm test`

Karma will launch Chrome and Firefox and will run the tests once.