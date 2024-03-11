// BackButton.tsx

import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styles from './BackBtn.module.scss';

const BackBtn:FC = () => {
  return (
    <Link to="/" className={styles.back_button}>
      Назад
    </Link>
  );
};

export default BackBtn;
