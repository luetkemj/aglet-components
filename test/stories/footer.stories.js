import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Footer from '../../src/components/footer/footer.component';

const basicInfo = 'Includes layout stying - no container layout required.';

storiesOf('Footer', module)
  .add('basic', withInfo(basicInfo)(() => <Footer repo="http://github.com" />));
