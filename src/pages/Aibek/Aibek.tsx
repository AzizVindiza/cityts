import React, { FC } from 'react';
import styles from './Aibek.module.sass';

interface AibekProps {}

const Aibek: FC<AibekProps> = () => (
  <div className={styles.Aibek} data-testid="Aibek">
    Aibek Component
  </div>
);

export default Aibek;
