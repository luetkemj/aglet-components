import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

import ControlledInputCheckbox from './input-checkbox.component';

storiesOf('Forms/InputCheckbox', module)
  .addDecorator(StoryWrapper)
  .add('Controlled InputCheckbox', withInfo(`
    Default Checked.`)(() => (
      <ControlledInputCheckbox
        name="inputCheckbox"
        label="Checkbox"
        required
      />
  )))
  .add('Controlled InputCheckbox Default Checked', withInfo(`
    Default Unchecked.`)(() => (
      <ControlledInputCheckbox
        name="inputCheckbox"
        label="Checkbox"
        required
        defaultChecked
      />
  )));
