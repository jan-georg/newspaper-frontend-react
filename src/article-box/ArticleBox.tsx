import { Article } from "generated/newspaper.schemas"

import { ArticleDisplay } from "../components/ArticleDisplay"

type ArticleBoxProps = {
    article: Article
    onRemoveClick: () => void
}

export function ArticleBox({ article, onRemoveClick }: ArticleBoxProps) {
    return (
        <div className="flex items-center space-x-5">
            <div className="flex flex-grow">
                <div>
                    <ArticleDisplay article={article} />
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
