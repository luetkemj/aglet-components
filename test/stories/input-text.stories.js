import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import InputText from '../../src/components/input-text/input-text.component';

storiesOf('Forms/InputText', module)
  .addDecorator(withKnobs)
  .add('Basic', withInfo({
    text: 'Minimum required props',
    propTables: [InputText],
  })(() => (
    <InputText
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      errorMessage={text('errorMessage', 'error message')}
      getValue={action('getValue')}
      instructions={text('instructions', 'instructions')}
      label={text('label', 'label')}
      name="name"
      onBlur={action('onBlur')}
      password={boolean('password', false)}
      placeholder={text('placeholder', 'placeholder')}
      readOnly={boolean('readOnly', false)}
      required={boolean('required', true)}
    />
  )));
