import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import style from './styleguide-typography.stories.scss';

storiesOf('Style Guide', module)
  .add('Typography', withInfo(`
    typgragpic styleguide
    `)(() => (
      <div>
        <div className={style.h6}>Content</div>
        <div className={style.group}>
          <div className={style.typeset}>
            <div className={style.regular}>UI Regular</div>
            <div className={style.regular}>@include typeset</div>
          </div>

          <div className={style.typeset}>
            <div className={style.small}>UI Small</div>
            <div className={style.small}>@include typeset(small)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.helper}>UI Helper</div>
            <div className={style.helper}>@include typeset(helper)</div>
          </div>
        </div>

        <div className={style.h6}>Headings</div>
        <div className={style.group}>
          <div className={style.typeset}>
            <div className={style.h1}>UI Heading1</div>
            <div className={style.h1}>@include typeset(h1)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h2}>UI Heading2</div>
            <div className={style.h2}>@include typeset(h2)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h3}>UI Heading3</div>
            <div className={style.h3}>@include typeset(h3)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h4}>UI Heading4</div>
            <div className={style.h4}>@include typeset(h4)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h5}>UI Heading5</div>
            <div className={style.h5}>@include typeset(h5)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h6}>UI Heading6</div>
            <div className={style.h6}>@include typeset(h6)</div>
          </div>
        </div>

        <div className={style.h6}>Headings Light</div>
        <div className={style.group}>
          <div className={style.typeset}>
            <div className={style.h1lt}>UI Heading1 Light</div>
            <div className={style.h1lt}>@include typeset(h1lt)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h2lt}>UI Heading2 Light</div>
            <div className={style.h2lt}>@include typeset(h2lt)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h3lt}>UI Heading3 Light</div>
            <div className={style.h3lt}>@include typeset(h3lt)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h4lt}>UI Heading4 Light</div>
            <div className={style.h4lt}>@include typeset(h4lt)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h5lt}>UI Heading5 Light</div>
            <div className={style.h5lt}>@include typeset(h5lt)</div>
          </div>

          <div className={style.typeset}>
            <div className={style.h6lt}>UI Heading6 Light</div>
            <div className={style.h6lt}>@include typeset(h6lt)</div>
          </div>
        </div>
      </div>
  )));
