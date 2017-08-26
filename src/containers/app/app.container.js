import React from 'react';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import style from './app.container.scss';

export default function AppContainer() {
  const docs = {
    header1: '<Header />',
    footer1: '<Footer repo={"#"} />',
  };

  return (
    <div className={style.container}>
      <p className={style.description}>{docs.header1}</p>
      <Header />

      <p className={style.description}>{docs.footer1}</p>
      <Footer repo={'#'} />
    </div>
  );
}
