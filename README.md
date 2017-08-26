# Aglet Components

Shared Components for [Aglet.io](http://aglet.io)

## Get Started

**install the package:**
`yarn add @aglet/components` or `npm install @aglet/components --save`

### Usage

### Header Component
`<Header />`

<img width="734" alt="screen shot 2017-08-08 at 7 52 32 pm" src="https://user-images.githubusercontent.com/925980/29100728-31d40ac6-7c73-11e7-88c2-523f923187b7.png">

### Footer Component
`<Footer repo={'#'} />`

<img width="878" alt="screen shot 2017-08-26 at 3 59 12 pm" src="https://user-images.githubusercontent.com/925980/29745064-ac16f89a-8a77-11e7-8cd3-17261bc4ea6c.png">



## Development

This project requires [Node.js](https://nodejs.org/en/). Ensure that you have the latest version installed before continuing.

This project uses a webpack server with hot module replacement for development.

Clone repo: `git clone git@github.com:luetkemj/aglet-components.git`

Install dependencies: `yarn` or `npm install`

Start the server: `npm start`

Navigate to `localhost:3000`

### Building
This project uses babel to transpile all javascript to es5 syntax and webpack to build a dist directory for publication.

Build for production: `npm run build`

Running the build script will remove the existing dist directory, run all linters and tests, and run webpack to build an es5 transpiled, uglified, bundle located in the dist directory.
<!--
## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags). -->


<!-- ## Configuration

Here you should write what are all of the configurations a user can enter when
using the project. -->

## Tests

This project uses jest for unit tests, code coverage reports, and component snap shots.

To run tests in watch mode: `npm run test:watch`

To run lint all code and run all tests: `npm run test`

## Style guide

This project uses [eslint-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). Custom rules can be found in the [.eslintrc](https://github.com/luetkemj/aglet-components/blob/master/.eslintrc) file included in this project.

eslint: `npm run lint:eslint`

This project uses [sass-lint](https://github.com/sasstools/sass-lint). Custom rules can be found in the [.sass-lint.yml](https://github.com/luetkemj/aglet-components/blob/master/.sass-lint.yml) file included in this project.

sass-lint `npm run lint:sass-lint`

eslint and sass-lint: `npm run lint`

## Contributing

Contributions are welcome.

Find a bug? Open an [issue](https://github.com/luetkemj/aglet-components/issues)!

Working on your first Pull Request? You can learn how from this free series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Licensing

[MIT License](https://github.com/luetkemj/aglet-components/blob/master/LICENSE)
