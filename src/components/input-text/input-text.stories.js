import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { StoryWrapper } from '../../storybook-decorators/story-wrapper';

import ControlledInputText, { InputText } from './input-text.component';

storiesOf('InputText', module)
  .addDecorator(StoryWrapper)
  .add('Basic', withInfo({
    text: 'Minimum required props',
    propTables: [InputText],
  })(() => (
    <InputText
      name="inputText"
      value="A static value"
      handleChange={() => {}}
    />
  )))
  .add('Placeholder', withInfo('With placeholder')(() => (
    <InputText
      name="inputText"
      handleChange={() => {}}
      placeholder="this is placeholder text..."
    />
  )))
  .add('Label', withInfo('With Label')(() => (
    <InputText
      name="inputText"
      handleChange={() => {}}
      value="This field has a label"
      label="Text Input"
    />
  )))
  .add('Required', withInfo('A required InputText')(() => (
    <InputText
      name="inputText"
      handleChange={() => {}}
      value="This field is required"
      label="Text Input"
      required
    />
  )))
  .add('Controlled InputText', withInfo(`
    A controlled InputText - this component has been wrapped in a Higher Order Component before
    export to manage state automagically.`)(() => (
      <ControlledInputText
        name="inputText"
        onChange={() => {}}
        placeholder="enter text here..."
        label="Text Input"
        required
      />
  )));
