import './NotFoundPage.sass';

export interface NotFoundPageProps {
}

const NotFoundPage = ({}: NotFoundPageProps) => (
    <main className={"notFoundPage"} data-testid="NotFoundPage">
        <div className="container">
            NotFoundPage Section
        </div>
    </main>
);

export default NotFoundPage;
