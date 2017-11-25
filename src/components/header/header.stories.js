import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

import Header from './header.component';

const basicInfo = 'Includes layout stying - no container layout required.';

storiesOf('Header', module)
  .addDecorator(StoryWrapper)
  .add('basic', withInfo(basicInfo)(() => <Header />));
