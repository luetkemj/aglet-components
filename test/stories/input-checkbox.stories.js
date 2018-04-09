import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import InputCheckbox from '../../src/components/input-checkbox/input-checkbox.component';

storiesOf('Forms/InputCheckbox', module)
  .addDecorator(withKnobs)
  .add('InputCheckbox', withInfo(`
    With Knobs`)(() => (
      <InputCheckbox
        disabled={boolean('disabled', false)}
        error={boolean('error', false)}
        getValue={action('getValue')}
        instructions={text('instructions', 'instructions')}
        label={text('label', 'label')}
        name="name"
        onBlur={action('onBlur')}
        readOnly={boolean('readOnly', false)}
        required={boolean('required', true)}
      />
  )));
