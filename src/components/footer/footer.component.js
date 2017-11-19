import React from 'react';
import PropTypes from 'prop-types';
import style from './footer.component.scss';

export default function Footer({ repo }) {
  return (
    <div className={style.container}>
      <div className={style.actions}>
        <div className={style.left}>
          <p><a href="http://luetkemj.github.io/">Made with <span className={style.heart}>&hearts;</span> in Austin, Texas</a></p>
        </div>

        <div className={style.right}>
          <p className={style.bug}><a href={`${repo}issues`}>Report a bug</a></p>
          <p className={style.feature}><a href={`${repo}issues`}>Request a feature</a></p>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  /** Value of the range */
  repo: PropTypes.string.isRequired,
};
