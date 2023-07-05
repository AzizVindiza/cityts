import React, { FC } from 'react';
import styles from './Aziz.module.sass';

interface AzizProps {}

const Aziz: FC<AzizProps> = () => (
  <div className={styles.Aziz} data-testid="Aziz">
    Aziz Component
  </div>
);

export default Aziz;
