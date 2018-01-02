import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

import ControlledInputCheckbox, { InputCheckbox } from './input-checkbox.component';

storiesOf('Forms/InputCheckbox', module)
  .addDecorator(StoryWrapper)
  .add('Basic', withInfo({
    text: 'Minimum required props',
    propTables: [InputCheckbox],
  })(() => (
    <InputCheckbox
      name="inputNumber"
      value="0"
      handleChange={() => {}}
    />
  )))
  .add('Label', withInfo('With Label')(() => (
    <InputCheckbox
      name="inputNumber"
      value="0"
      handleChange={() => {}}
      label="Number Input Field"
    />
  )))
  .add('Required', withInfo('A required InputCheckbox')(() => (
    <InputCheckbox
      name="inputNumber"
      value="0"
      handleChange={() => {}}
      label="Number Input Field"
      required
    />
  )))
  .add('Controlled InputCheckbox', withInfo(`
    A controlled InputCheckbox - this component has been wrapped in a Higher Order Component before
    export to manage state automagically.`)(() => (
      <ControlledInputCheckbox
        name="inputNumber"
        onChange={() => {}}
        label="Number Input Field"
        required
      />
  )))
  .add('Controlled InputCheckbox with initialValue', withInfo(`
    A controlled InputCheckbox - this component has been wrapped in a Higher Order Component before
    export to manage state automagically.`)(() => (
      <ControlledInputCheckbox
        name="inputNumber"
        initialValue
        onChange={v => console.log(v)}
        label="Number Input Field"
        required
      />
  )));
