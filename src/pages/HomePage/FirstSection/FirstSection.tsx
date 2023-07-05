// @ts-ignore
import styles from './FirstSection.module.sass';

export interface FirstSectionProps {
}

const FirstSection = ({}: FirstSectionProps) => (
    <section className={styles.firstSection} data-testid="FirstSection">
        <div className="container">
            FirstSection Section
        </div>
    </section>
);

export default FirstSection;
