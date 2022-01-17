import Link from 'next/link';
import { ButtonLgBlue, ButtonSmBlue } from '../components/buttons';
import styles from '../styles/404.module.scss';
import { motion } from 'framer-motion';
import { container, container2, container3, item } from '../motion/motion';

const MyCustom404Page = (props) => {
  return (
    <div className={styles.container404}>
      <div>
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} size={50}>
            <h1>Oups något gick fel.</h1>
          </motion.div>
        </motion.div>
        <motion.div variants={container2} initial="hidden" animate="show">
          <motion.div variants={item} size={50}>
            <h3>
              Antingen har vi som har klantat till det eller så existerar inte denna sida.
            </h3>
          </motion.div>
        </motion.div>
        <motion.div variants={container3} initial="hidden" animate="show">
          <motion.div variants={item} size={50}>
            <div className={styles.mobile}>
              <ButtonSmBlue href="/" text="Tillbaka till techonomic" />
            </div>
            <div className={styles.desktop}>
              <ButtonLgBlue href="/" text="Tillbaka till techonomic" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyCustom404Page;
