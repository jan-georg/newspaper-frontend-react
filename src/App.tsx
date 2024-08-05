import { ArticleGird } from "./article-grid/ArticleGrid"
import { ArticleList } from "./article-list/ArticleList"
import { NewspaperProvider } from "./NewspaperContext"

function App() {
    return (
        <>
            <header
                id="header"
                className="sticky top-0 bg-white shadow-lg w-full border-b-2 flex flex-col justify-center items-center"
            >
                <div className="text-4xl font-bold my-5">Great Daily Newspaper</div>
            </header>

            <main id="content">
                <div className="flex p-5 space-x-7">
                    <NewspaperProvider>
                        <ArticleList />
                        <ArticleGird />
                    </NewspaperProvider>
                </div>
            </main>
        </>
    )
}

export default App
