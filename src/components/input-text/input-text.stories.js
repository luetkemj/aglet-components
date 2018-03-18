import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { StoryWrapper } from '../../../.storybook/storybook-decorators/story-wrapper';

import InputText from './input-text.component';

storiesOf('Forms/InputText', module)
  .addDecorator(StoryWrapper)
  .addDecorator(withKnobs)
  .add('Basic', withInfo({
    text: 'Minimum required props',
    propTables: [InputText],
  })(() => (
    <InputText
      name={text('name', 'name')}
      getValue={action('getValue')}
      password={boolean('password', false)}
      placeholder={text('placeholder', 'placeholder')}
      readOnly={boolean('readOnly', false)}
      label={text('label', 'label')}
      required={boolean('required', true)}
    />
  )));
