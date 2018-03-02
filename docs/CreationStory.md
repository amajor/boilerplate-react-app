# Creation of this Boilerplate

When creating this boilerplate, this is the process I used.

* [Create React App](#create-react-app)
* [Simple Component](#add-a-simple-component)
* [Test Suite](#test-suite)
* [ESLint](#eslint)
* [React Storybook](#react-storybook)

## Create React App

Using [Create React App](https://github.com/facebook/create-react-app), build a
new application.

```sh
create-react-app boilerplate-react-app
```

In order to add the features further down this page, I need full control over my
configuration choices. While [Create React App](https://github.com/facebook/create-react-app)
gets me off the ground very quickly, the fact that it obscures the
configurations makes it harder to add customizations.

I can eject by running

```sh
npm run eject
```

## Add a Simple Component

By adding a very basic component, I'm able to see the file structure and test
out my preferred way to structure the unit tests. This also sets up an
example of how to organize components to someone using this boilerplate.

You'll see the component and its test in _src/components/Image_.

I've also added it to App.js to ensure it's working the way I expect.

## Test Suite

There is a built in test suite that uses
[Jest](https://facebook.github.io/jest/).

In order to allow for shallow testing, I've also included enzyme by running the
following scripts (you can read more about it
[here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components)):

```sh
npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
```

The shallow testing allows me to render just the component itself and not any
deeper (no child components).

Once I've installed Enzyme, we need to import the files for test setup, so I
created the file _config/jest/setupEnzyme.js_ as described by
[Facebook](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components).

Then we just need to reference the file in setup in _package.json_ by adding the
setup file path to the **setupFiles** section.

Test files for components can be named to include `test` or `spec`. You can see
what files are being searched by looking at _package.json_ and then reading the
`testMatch` section under `jest`.

Example test files can be seen in _App.test.js_ and in
_src/components/Image/spec.jsx_.

## ESLint

It's always good to have a linter in order to have consistency in your code
style, whether writing it yourself or with the help of multiple people. Linters
are also great ways to learn about better ways to write code!

ESLint was installed as a dependency using npm:

```sh
npm install eslint --save
```

Once that was done, I initalized my config file:

```sh
./node_modules/.bin/eslint --init
```

I answered the prompts as follows:

* Use a popular style guide
* Airbnb
* y (Do you use React?)
* JSON

Once it was installed, I add a couple of scripts to _package.json_:

```json
  "lint": "eslint ./src/**/*.js*",
  "lint:fix": "eslint ./src/**/*.js* --fix",
```

What `npm run lint` does is look for _.js_ and _.jsx_ files that are inside of
the _src_ directory. This way we're not also linting configuration files, we
really only care about the components that are being written for the
application.

The second command, `npm run lint:fix` will run the linter with the `--fix`
argument, which will automatically fix any warnings that are straightforward.

## React Storybook

[React Storybook](https://storybook.js.org/) is a very useful tool for showcasing individual
components before they are included as a part of the whole app.

It also allows you to create prop definitions and provide source code examples to developers
that may be using your components.

Future you will thank past you for having components documented in this way.

```sh
npm i -g @storybook/cli
cd boilerplate-react-app
getstorybook
```

