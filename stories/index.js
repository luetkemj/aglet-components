import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Welcome } from '@storybook/react/demo';
import Footer from '../src/components/footer/footer.component';
import Header from '../src/components/header/header.component';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Footer', module)
  .add('basic', withInfo(`
        this is the footer component
      `)(() => <Footer repo="http://github.com" />));
storiesOf('Header', module)
  .add('basic', () => <Header />);
