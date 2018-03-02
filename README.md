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

# Running the Application

If you're running the app for the first time, be sure to install all dependencies.

```sh
npm install
```

Now you're ready to rock and roll!

```sh
npm start
```

This will start up the app and automatically point your browser to `http://localhost:3000/`.

# Running Tests

This runs tests.

```sh
npm test
```

Follow the prompts in your terminal for additional options, including filtering
tests by file or test names.

### Creating the Build

This builds a static copy of the application, ready for deployment.

```sh
npm run build
```
