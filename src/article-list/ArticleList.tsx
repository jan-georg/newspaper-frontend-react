import classNames from "classnames"
import { useNewspaperContext } from "../NewspaperContext"

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
                            "bg-blue-200": isSelected,
                            "border-blue-300": isSelected,
                            "bg-gray-200": isInNewspaper,
                            "hover:cursor-pointer": !isInNewspaper && !isSelected
                        })}
                        onClick={() => selectArticle(article)}
                    >
                        <div className="text font-bold">{article.title}</div>
                        <div className="flex flex-row space-x-10 text-gray-500">
                            <div>{article.author}</div>
                            <div>|</div>
                            <div>{article.topic}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
