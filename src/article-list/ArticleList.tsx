import classNames from "classnames"
import { useNewspaperContext } from "../NewspaperContext"
import { ArticleDisplay } from "../components/ArticleDisplay"

export function ArticleList() {
    const { articles, newspaperArticles, selectedArticle, selectArticle } = useNewspaperContext()

    return (
        <div className="flex-none">
            {articles.map((article) => {
                const isSelected = selectedArticle?.id === article.id
                const isInNewspaper = newspaperArticles.some((x) => x.id === article.id)

                return (
                    <div
                        key={article.id}
                        className={classNames("border-2 rounded-lg p-3 mb-3 shadow", {
                            "seleccted": isSelected,
                            "bg-gray-200": isInNewspaper,
                            "hover:cursor-pointer": !isInNewspaper && !isSelected
                        })}
                        onClick={() => selectArticle(article)}
                    >
                        <ArticleDisplay article={article} />
                    </div>
                )
            })}
        </div>
    )
}
