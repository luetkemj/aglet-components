import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

const req = require.context('../src/', true, /\.stories\.js$/)

// add-options:
// https://github.com/storybooks/storybook/tree/master/addons/options
setOptions({
  name: 'Aglet',
  url: 'https://github.com/luetkemj/aglet-components',
  sidebarAnimations: false,
  downPanelInRight: true,
});

// addon-info:
// https://github.com/storybooks/storybook/tree/master/addons/info
setDefaults({
  header: true,
  inline: true, // Displays info inline vs click button to view
  styles: {
    infoBody: {
      marginTop: '20px',
    },
  },
});

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
