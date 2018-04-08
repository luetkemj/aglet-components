import React from 'react';
import PropTypes from 'prop-types';
import style from './footer.component.scss';

export default function Footer({ repo }) {
  return (
    <div className={style.container}>
      <div className={style.actions}>
        <div className={style.left}>
          <p>
            <a className={style.link} href="http://luetkemj.github.io/">
              Made with <span className={style.heart}>&hearts;</span> in Austin, Texas
            </a>
          </p>
        </div>

        <div className={style.right}>
          <p className={style.bug}>
            <a className={style.link} href={`${repo}issues`}>
              Report a bug
            </a>
          </p>
          <p className={style.feature}>
            <a className={style.link} href={`${repo}issues`}>
              Request a feature
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  /** String - Link to github repo */
  repo: PropTypes.string.isRequired,
};
