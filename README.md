# Aglet Components

Shared Components for [Aglet.io](http://aglet.io)

## Get Started

**install the package:**
`yarn add @aglet/components` or `npm install @aglet/components --save`

### Usage

After installing the package use components like this:

`import Header from '@aglet/components';`

For a full list of available components and comprehensive documentation visit [aglet.io/developers/components](http://aglet.io/developers/components)


## Development

This project requires [Node.js](https://nodejs.org/en/). Ensure that you have node 8 or greater installed.

Clone repo: `git clone git@github.com:luetkemj/aglet-components.git`

Install dependencies: `yarn` or `npm install`

This project uses [Storybook](https://storybook.js.org/) for development.

Start storybook: `yarn dev` or `npm run dev`

Navigate to `localhost:6006`

### Building

This project has two build options.

## To build for publication on npm

This project uses babel to transpile all javascript to es5 syntax and webpack to build a dist directory for publication.

Build for production: `yarn build` or `npm run build`

Running the build script will remove the existing dist directory, run all linters and tests, and run webpack to build an es5 transpiled, uglified, bundle located in the dist directory.

## To build as a static app

This project uses [Storybook](https://storybook.js.org/) for development and documentation.

To build a static app for publication: `yarn build:storybook` or `npm run build:storybook`

This will build the storybook configured in the .storybook directory into a static webpack and place it inside the storybook-static directory.

To test it locally, simply run the following commands:

```
cd storybook-static
python -m SimpleHTTPServer
```


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
