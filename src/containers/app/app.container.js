import React from 'react';
import Header from '../../components/header/header.component';
import style from './app.container.scss';

export default function AppContainer() {
  const docs = {
    header1: '<header />',
  };

  return (
    <div className={style.container}>
      <p className={style.description}>{docs.header1}</p>
      <Header />
    </div>
  );
}
