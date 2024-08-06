import { Article } from "generated/newspaper.schemas"

type ArticleBoxProps = {
    article: Article
    onRemoveClick: () => void
}

export function ArticleBox({ article, onRemoveClick }: ArticleBoxProps) {
    return (
        <div className="flex items-center space-x-5">
            <div className="flex flex-grow">
                <div>
                    <div className="text font-bold">{article.title}</div>
                    <div className="flex flex-row space-x-10 text-gray-500">
                        <div>{article.author}</div>
                        <div>|</div>
                        <div>{article.topic}</div>
                    </div>
                </div>
            </div>

            <div
                className="hover:cursor-pointer"
                onClick={onRemoveClick}
            >
                <span className="material-symbols-outlined text-gray-500">delete</span>
            </div>
        </div>
    )
}
