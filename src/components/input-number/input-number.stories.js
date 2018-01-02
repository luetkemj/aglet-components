import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

import ControlledInputNumber, { InputNumber } from './input-number.component';

storiesOf('Forms/InputNumber', module)
  .addDecorator(StoryWrapper)
  .add('Basic', withInfo({
    text: 'Minimum required props',
    propTables: [InputNumber],
  })(() => (
    <InputNumber
      name="inputNumber"
      value="0"
      handleChange={() => {}}
    />
  )))
  .add('Placeholder', withInfo('With placeholder')(() => (
    <InputNumber
      name="inputNumber"
      placeholder="0"
      handleChange={() => {}}
    />
  )))
  .add('Label', withInfo('With Label')(() => (
    <InputNumber
      name="inputNumber"
      value="0"
      handleChange={() => {}}
      label="Number Input Field"
    />
  )))
  .add('Required', withInfo('A required InputNumber')(() => (
    <InputNumber
      name="inputNumber"
      value="0"
      handleChange={() => {}}
      label="Number Input Field"
      required
    />
  )))
  .add('Controlled InputNumber', withInfo(`
    A controlled InputNumber - this component has been wrapped in a Higher Order Component before
    export to manage state automagically.`)(() => (
      <ControlledInputNumber
        name="inputNumber"
        onChange={() => {}}
        label="Number Input Field"
        required
      />
  )))
  .add('Controlled InputNumber with initialValue', withInfo(`
    A controlled InputNumber - this component has been wrapped in a Higher Order Component before
    export to manage state automagically.`)(() => (
      <ControlledInputNumber
        name="inputNumber"
        initialValue="10"
        onChange={() => {}}
        label="Number Input Field"
        required
      />
  )));
