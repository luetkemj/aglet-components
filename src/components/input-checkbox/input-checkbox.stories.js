import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

import ControlledInputCheckbox from './input-checkbox.component';

storiesOf('Forms/InputCheckbox', module)
  .addDecorator(StoryWrapper)
  .add('Controlled InputCheckbox', withInfo(`
    A controlled InputCheckbox - this component has been wrapped in a Higher Order Component before
    export to manage state automagically.`)(() => (
      <ControlledInputCheckbox
        name="inputCheckbox"
        label="Number Input Field"
        required
        isChecked
      />
  )));
