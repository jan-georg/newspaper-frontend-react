import { AddButton } from "../add-button/AddButton"
import { ArticleBox } from "../article-box/ArticleBox"
import { useNewspaperContext } from "../NewspaperContext"

const numMaxAddButtons: number = 4

export function ArticleGird() {
    const { addArticleToNewspaper, removeArticleFromNewspaper, deselectArticle, newspaperArticles, selectedArticle } =
        useNewspaperContext()

    const handleAdd = () => {
        if(!selectedArticle) return
        addArticleToNewspaper(selectedArticle!)
        deselectArticle()
    }

    return (
        <div className="flex-grow sticky top-0 h-screen overflow-y-auto">
            <div className="h-full flex items-center justify-center">
                <div className="grid grid-cols-2 grid-rows-2 gap-3">
                    {newspaperArticles.map((article) => (
                        <div className="border-2 rounded-lg p-2 shadow">
                            <ArticleBox
                                article={article}
                                onRemoveClick={() => removeArticleFromNewspaper(article)}
                            />
                        </div>
                    ))}

                    {Array.from({ length: numMaxAddButtons - newspaperArticles.length }).map(() => (
                        <div className="border-2 rounded-lg p-2 shadow">
                            <AddButton onClick={handleAdd} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
