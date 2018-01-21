import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../../.storybook/storybook-decorators/story-wrapper';

import Footer from './footer.component';

const basicInfo = 'Includes layout stying - no container layout required.';

storiesOf('Footer', module)
  .addDecorator(StoryWrapper)
  .add('basic', withInfo(basicInfo)(() => <Footer repo="http://github.com" />));
