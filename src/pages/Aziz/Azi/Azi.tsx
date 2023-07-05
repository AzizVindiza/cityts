import React, { FC } from 'react';
import styles from './Azi.module.sass';

interface AziProps {}

const Azi: FC<AziProps> = () => (
  <div className={styles.Azi} data-testid="Azi">
    Azi Component
  </div>
);

export default Azi;
