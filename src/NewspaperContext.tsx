import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react"
import { Article } from "./generated/newspaper.schemas"

const initialArticles: Article[] = [
    {
        author: "John Doe",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        id: 1,
        title: "The Importance of Reading for Personal Growth",
        topic: "Personal Development"
    },
    {
        author: "Alice Smith",
        content: {
            text: "The world of technology is constantly evolving, impacting our daily lives."
        },
        id: 2,
        title: "Exploring the Latest Technological Advancements",
        topic: "Technology"
    },
    {
        author: "Jane Williams",
        content: {
            text: "Healthy eating habits play a significant role in maintaining overall well-being."
        },
        id: 3,
        title: "A Guide to Nutritious Eating and Balanced Diet",
        topic: "Health"
    },
    {
        author: "Robert Johnson",
        content: {
            text: "Understanding the fundamentals of investing is crucial for financial success."
        },
        id: 4,
        title: "Diving into the World of Investments",
        topic: "Finance"
    },
    {
        author: "Emily Brown",
        content: {
            text: "Climate change remains a pressing issue that requires immediate attention."
        },
        id: 5,
        title: "Addressing Climate Change: Actions for a Sustainable Future",
        topic: "Environment"
    },
    {
        author: "David Wilson",
        content: {
            text: "Exploring the diverse cultures and traditions around the world."
        },
        id: 6,
        title: "Celebrating Cultural Diversity: A Global Perspective",
        topic: "Culture"
    },
    {
        author: "Sophia Garcia",
        content: {
            text: "Mental health awareness and the importance of destigmatizing mental illnesses."
        },
        id: 7,
        title: "Breaking the Stigma: Understanding Mental Health",
        topic: "Psychology"
    },
    {
        author: "Michael Anderson",
        content: {
            text: "The evolution of artificial intelligence and its impact on various industries."
        },
        id: 8,
        title: "AI Revolution: Transforming Industries and Beyond",
        topic: "Technology"
    },
    {
        author: "Olivia Martinez",
        content: {
            text: "The power of mindfulness in reducing stress and enhancing overall well-being."
        },
        id: 9,
        title: "Embracing Mindfulness: A Path to Inner Peace",
        topic: "Health"
    },
    {
        author: "William Thompson",
        content: {
            text: "The significance of education in shaping the future of individuals and society."
        },
        id: 10,
        title: "Empowering Through Education: Building a Better Tomorrow",
        topic: "Education"
    },
    {
        author: "Emily Johnson",
        content: {
            text: "Exploring the intersections of art and technology in the modern world."
        },
        id: 11,
        title: "Art-Tech Fusion: Where Creativity Meets Innovation",
        topic: "Art & Technology"
    },
    {
        author: "Daniel Garcia",
        content: {
            text: "The impact of climate change on global economies and strategies for sustainability."
        },
        id: 12,
        title: "Navigating the Climate Crisis: Toward a Sustainable Future",
        topic: "Climate Change"
    },
    {
        author: "Sophia Patel",
        content: {
            text: "Examining the role of AI in revolutionizing healthcare and improving patient outcomes."
        },
        id: 13,
        title: "AI in Healthcare: Transforming Patient Care",
        topic: "Healthcare Technology"
    },
    {
        author: "James Roberts",
        content: {
            text: "The evolution of e-commerce and its impact on traditional retail businesses."
        },
        id: 14,
        title: "E-Commerce Disruption: Changing the Retail Landscape",
        topic: "E-Commerce"
    },
    {
        author: "Emma Wilson",
        content: {
            text: "The psychology behind decision-making and its implications in everyday life."
        },
        id: 15,
        title: "Decoding Decisions: The Psychology of Choice",
        topic: "Psychology"
    },
    {
        author: "Liam Anderson",
        content: {
            text: "The cultural significance of food and its connection to identity and heritage."
        },
        id: 16,
        title: "Feast of Culture: Exploring Culinary Traditions",
        topic: "Food & Culture"
    },
    {
        author: "Ava Thompson",
        content: {
            text: "The art of storytelling and its power to influence and inspire."
        },
        id: 17,
        title: "Crafting Narratives: The Influence of Stories",
        topic: "Storytelling"
    },
    {
        author: "Noah Lewis",
        content: {
            text: "The future of work in the digital age and adapting to changing workplace dynamics."
        },
        id: 18,
        title: "Workplace Evolution: Navigating the Digital Era",
        topic: "Future of Work"
    },
    {
        author: "Aria Martinez",
        content: {
            text: "The role of meditation and mindfulness in enhancing mental well-being."
        },
        id: 19,
        title: "Mindfulness Matters: Cultivating Inner Peace",
        topic: "Mindfulness"
    },
    {
        author: "Oliver Brown",
        content: {
            text: "The resurgence of traditional craftsmanship in a modern, tech-driven world."
        },
        id: 20,
        title: "Reviving Craftsmanship: Tradition in the Tech Age",
        topic: "Craftsmanship"
    }
]

type FooBar = {
    articles: Article[]
    selectedArticle: Article | null
    newspaperArticles: Article[]
    selectArticle: (article: Article) => void
    deselectArticle: () => void
    addArticleToNewspaper: (article: Article) => void
    removeArticleFromNewspaper: (article: Article) => void
}

const NewspaperContext = createContext<FooBar>({
    articles: [],
    selectedArticle: null,
    newspaperArticles: [],
    selectArticle: () => undefined,
    deselectArticle: () => undefined,
    addArticleToNewspaper: () => undefined,
    removeArticleFromNewspaper: () => undefined
})

export function NewspaperProvider({ children }: PropsWithChildren) {
    const [articles, setArticles] = useState<Article[]>(initialArticles)
    const [selectedArticleId, setSelectedArticleId] = useState<Article["id"] | null>(null)
    const [newspaperArticleIds, setNewspaperArticleIds] = useState<Array<Article["id"]>>([2])

    const selectedArticle = useMemo(
        () => articles.find((x) => x.id === selectedArticleId) ?? null,
        [articles, selectedArticleId]
    )

    const newspaperArticles = useMemo(
        () => articles.filter((x) => newspaperArticleIds.includes(x.id)),
        [articles, newspaperArticleIds]
    )

    const selectArticle = (article: Article) => setSelectedArticleId(article.id)
    const deselectArticle = () => setSelectedArticleId(null)

    const addArticleToNewspaper = (article: Article) => setNewspaperArticleIds((prev) => [...prev, article.id])
    const removeArticleFromNewspaper = (article: Article) =>
        setNewspaperArticleIds((prev) => prev.filter((x) => x !== article.id))

    return (
        <NewspaperContext.Provider
            value={{
                articles,
                selectedArticle,
                newspaperArticles,
                selectArticle,
                deselectArticle,
                addArticleToNewspaper,
                removeArticleFromNewspaper
            }}
        >
            {children}
        </NewspaperContext.Provider>
    )
}

export function useNewspaperContext() {
    return useContext(NewspaperContext)
}
