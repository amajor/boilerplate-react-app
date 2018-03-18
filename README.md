# Boilerplate for a React Application

This is the setup for my current personal preferences in a React application.

If you'd like to see all the steps I went through to set up the foundation of
this boilerplate, check out the [Creation Story](./docs/CreationStory.md).

The file structure recommended for components is as follows:

```
src/
└── components/
    └── MyAwesomeComponent
        ├── index.jsx
        ├── spec.jsx
        └── stories.jsx
```

The component should have these files at a minimum.

* **index.jsx** - this is the actual component
* **spec.jsx** - this contains all unit tests for the component
* **stories.jsx** - this generates a page for Storybook for interactive examples

See the **[Developing](./README.md#developing)** section below for creating new components using a script!

## Running the Application

If you're running the app for the first time, be sure to install all dependencies.

```sh
npm install
```

Now you're ready to rock and roll!

```sh
npm start
```

This will start up the app and automatically point your browser to `http://localhost:3000/`.

## Running Tests

This runs tests. You must have [Watchman](https://facebook.github.io/watchman/docs/install.html) installed in order to run the test suite.

```sh
npm test
```

Follow the prompts in your terminal for additional options, including filtering
tests by file or test names.

If you run into any problems with getting the tests to run, first check the [Troubleshooting](./docs/Troubleshooting.md#error-error-watching-file-for-changes-emfile) document for more ideas.

## Creating the Build

This builds a static copy of the application, ready for deployment.

```sh
npm run build
```

## Developing

Want to add new components? Great!

There are a few files that every component should have:

* **index.jsx** _(this is the actual component)_
* **spec.jsx** _(this contains necessary tests for the component)_
* **stories.jsx** _(this contains storybook entries for the component)_
* **OPTIONAL:** styles.jsx / styles.css _(any styling needed)_

There's a script set up that you can run in order to get the main files set up for a new component.

```sh
npm run create
```

This will prompt you with one simple question. The response you provide will 
be used in the naming and setup of the component files.

### Example

```sh
$ npm run create

Component Name (in PascalCase, please): AmazingComponent
```

This will generate 3 files for you:

```
src/
└── components/
    └── MyAwesomeComponent
        ├── index.jsx
        ├── spec.jsx
        └── stories.jsx
```

Now that your files are set up, you can edit away!
