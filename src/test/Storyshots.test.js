import initStoryshots from '@storybook/addon-storyshots';

const addonInfo = require('@storybook/addon-info');

addonInfo.withInfo = () => storyFn => storyFn;

initStoryshots();
