import './TemplateName.sass';

export interface TemplateNameProps {
}

const TemplateName = ({}: TemplateNameProps) => (
    <section className={"templateName"} data-testid="TemplateName">
        <div className="container">
            TemplateName Section
        </div>
    </section>
);

export default TemplateName;
