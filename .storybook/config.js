import { configure, addDecorator } from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';

// Determine which files are included in story display
const requireDocumentStories = require.context('../docs/stories', true, /.stories.jsx$/);
const requireComponentStories = require.context('../src/components', true, /.stories.jsx$/);
function loadStories() {
  requireDocumentStories.keys().forEach((filename) => requireDocumentStories(filename));
  requireComponentStories.keys().forEach((filename) => requireComponentStories(filename));
}

// See full list of options at
// https://www.npmjs.com/package/@storybook/addon-info#options-and-defaults
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: [/* Components used in story */], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10, // Displays the first 10 characters of the prop name
  maxPropArrayLength: 10, // Displays the first 10 items in the default prop array
  maxPropStringLength: 100, // Displays the first 100 characters in the default prop string
});

// Adds summary text for all components.
const commonInfo = 'Above is an example of what this component would look like using the source below.';
addDecorator((story, context) => (withInfo(commonInfo)(story)(context)));

// Finalize configuration
configure(loadStories, module);
