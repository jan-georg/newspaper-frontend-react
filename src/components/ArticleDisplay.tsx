import { Article } from "generated/newspaper.schemas"

export const ArticleDisplay = ({ article }: { article: Article }) => {
    return (
        <>
            <div className="text font-bold">{article.title}</div>
            <div className="flex flex-row space-x-10 text-gray-500">
                <div>{article.author}</div>
                <div>|</div>
                <div>{article.topic}</div>
            </div>
        </>
    )
}
