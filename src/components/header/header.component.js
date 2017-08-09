import React from 'react';
import style from './header.component.scss';

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.masthead}>
        <div className={style.logo}>
          <img src="https://s3-us-west-2.amazonaws.com/agletio/images/nib.svg" alt="logo" />
        </div>
        <div className={style.nameplate}>
          <div className={style.name}>AGLET</div>
          <div className={style.description}>Tools for the discerning Game Master</div>
        </div>
      </div>
    </div>
  );
}
