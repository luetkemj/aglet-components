import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

const req = require.context('../test/', true, /\.stories\.js$/)

const style = {
  wrapper: {
    minHeight: '100vh',
    width: '100vw',
    padding: '10px',
    backgroundColor: '#fff',
    backgroundImage: `linear-gradient(#eee 2px, transparent 2px),
      linear-gradient(90deg, #eee 2px, transparent 2px),
      linear-gradient(#eee 1px, transparent 1px),
      linear-gradient(90deg, #eee 1px, transparent 1px)`,
    backgroundSize: '100px 100px, 100px 100px, 10px 10px, 10px 10px',
    backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
  },
};

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

addDecorator(story => (
  <div style={style.wrapper}>
    { story() }
  </div>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
