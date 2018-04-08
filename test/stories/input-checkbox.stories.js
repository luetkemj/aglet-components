import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ControlledInputCheckbox from '../../src/components/input-checkbox/input-checkbox.component';

storiesOf('Forms/InputCheckbox', module)
  .add('Controlled InputCheckbox', withInfo(`
    Controlled Checkbox`)(() => (
      <ControlledInputCheckbox
        name="inputCheckbox"
        label="Checkbox"
        required
      />
  )))
  .add('Controlled InputCheckbox Default Checked', withInfo(`
    Default Checked.`)(() => (
      <ControlledInputCheckbox
        name="inputCheckbox"
        label="Checkbox"
        required
        defaultChecked
      />
  )));
