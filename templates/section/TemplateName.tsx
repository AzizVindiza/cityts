// @ts-ignore
import styles from './TemplateName.module.sass';

export interface TemplateNameProps {
}

const TemplateName = ({}: TemplateNameProps) => (
    <section className={styles.templateName} data-testid="TemplateName">
        <div className="container">
            TemplateName Section
        </div>
    </section>
);

export default TemplateName;
