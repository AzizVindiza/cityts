import './TemplateName.sass';

export interface TemplateNameProps {
}

const TemplateName = ({}: TemplateNameProps) => (
    <div className={"templateName"} data-testid="TemplateName">
        TemplateName Component
    </div>
);

export default TemplateName;
