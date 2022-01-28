import styles from '../styles/404.module.scss';
import Head from 'next/head';

import Lottie from 'lottie-react';
import errorImage from '../lottie/404.json';
import { ButtonSm, ButtonLg } from '../components/buttons';
import FadeIn from '../motion/fadeIn';

const My404Page = () => {
  return (
    <>
      <Head>
        <title>Techonomic - 404-sida</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Lottie className={styles.animation} animationData={errorImage} />
          <FadeIn>
            <h1> Oops något gick fel..</h1>
            <h3>
              Antingen har vi klantat till det eller så existerar inte denna
              sida :(
            </h3>
            <div className={styles.mobile}>
              <ButtonSm href="/" text="Tillbaka till Techonomic" />
            </div>
            <div className={styles.desktop}>
              <ButtonLg href="/" text="Tillbaka till Techonomic" />
            </div>
          </FadeIn>
          <p>
            is nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse dolore eu fugiat nulla pariatur.{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default My404Page;
