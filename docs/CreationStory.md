# Creation of this Boilerplate

When creating this boilerplate, this is the process I used.

* [Create React App](#create-react-app)
* [Simple Component](#add-a-simple-component)

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

