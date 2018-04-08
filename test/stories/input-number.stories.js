import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ControlledInputNumber, { InputNumber } from '../../src/components/input-number/input-number.component';

storiesOf('Forms/InputNumber', module)
  .add('Basic', withInfo({
    text: 'Minimum required props',
    propTables: [InputNumber],
  })(() => (
    <InputNumber
      name="inputNumber"
      value={0}
      handleChange={() => {}}
    />
  )))
  .add('Placeholder', withInfo('With placeholder')(() => (
    <InputNumber
      name="inputNumber"
      placeholder={0}
      handleChange={() => {}}
    />
  )))
  .add('Label', withInfo('With Label')(() => (
    <InputNumber
      name="inputNumber"
      value={0}
      handleChange={() => {}}
      label="Number Input Field"
    />
  )))
  .add('Required', withInfo('A required InputNumber')(() => (
    <InputNumber
      name="inputNumber"
      value={0}
      handleChange={() => {}}
      label="Number Input Field"
      required
    />
  )))
  .add('Controlled', withInfo(`
    This number input is controlled`)(() => (
      <ControlledInputNumber
        name="inputNumber"
        onChange={() => {}}
        label="Number Input Field"
        required
      />
  )))
  .add('Controlled with initialValue', withInfo(`
    Controlled with an initial value of 10`)(() => (
      <ControlledInputNumber
        name="inputNumber"
        initialValue={10}
        onChange={() => {}}
        label="Number Input Field"
        required
      />
  )))
  .add('With min value', withInfo(`
    Min of 0`)(() => (
      <ControlledInputNumber
        name="inputNumber"
        initialValue={10}
        onChange={() => {}}
        label="Number Input Field"
        required
        min={0}
      />
  )))
  .add('With max value', withInfo(`
    Max of 10`)(() => (
      <ControlledInputNumber
        name="inputNumber"
        initialValue={10}
        onChange={() => {}}
        label="Number Input Field"
        required
        max={10}
      />
  )))
  .add('With min / max value', withInfo(`
    Min of 0, max of 10`)(() => (
      <ControlledInputNumber
        name="inputNumber"
        initialValue={10}
        onChange={() => {}}
        label="Number Input Field"
        required
        min={0}
        max={10}
      />
  )));
