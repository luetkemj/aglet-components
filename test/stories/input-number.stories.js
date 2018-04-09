import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';

import InputNumber from '../../src/components/input-number/input-number.component';

storiesOf('Forms/InputNumber', module)
  .addDecorator(withKnobs)
  .add('InputNumber', withInfo({
    text: 'Minimum required props',
    propTables: [InputNumber],
  })(() => (
    <InputNumber
      disabled={boolean('disabled', false)}
      getValue={action('getValue')}
      step={number('step', 0.5)}
      instructions={text('instructions', 'instructions')}
      label={text('label', 'label')}
      max={number('max', 10)}
      min={number('min', 0)}
      name="name"
      onBlur={action('onBlur')}
      placeholder={text('placeholder', '0')}
      readOnly={boolean('readOnly', false)}
      required={boolean('required', true)}
    />
  )));
