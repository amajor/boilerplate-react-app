# Troubleshooting

## Error: Error watching file for changes: EMFILE

The [create-react-app](https://github.com/facebook/create-react-app) script that this boilerplate was initialized with requires
that you have **[Watchman](https://facebook.github.io/watchman/docs/install.html)** installed on your machine.

You may need to install **[Watchman](https://facebook.github.io/watchman/docs/install.html)** if you see an error like this while running your test suite:

```sh
2018-03-18 08:20 node[4572] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_re
gister_rpc() => (null) (-22)
2018-03-18 08:20 node[4572] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_re
gister_rpc() => (null) (-22)
2018-03-18 08:20 node[4572] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_re
gister_rpc() => (null) (-22)

events.js:182
      throw er; // Unhandled 'error' event
      ^

Error: Error watching file for changes: EMFILE
    at _errnoException (util.js:1026:11)
    at FSEvent.FSWatcher._handle.onchange (fs.js:1360:9)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! disaster-pie@0.1.0 specs: `node scripts/test.js --env=jsdom`
npm ERR! Exit status 1
npm ERR!
```

Check out [this issue](https://github.com/facebook/react-native/issues/910) for
more details on what to install.

If you're running a Mac, using [homebrew](https://brew.sh/) to manage your installations makes this easier.

```sh
brew install watchman
```

Once installed, running `npm test` should now work.
