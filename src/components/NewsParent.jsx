import NewsItem from "./NewsItem";

export default function NewsParent({ list, setList }) {
    function deleteNews(newsId) {
        if (confirm("Rostan ham yangilikni o'chirmoqchimisiz?")) {
            const updatedList = list.filter((news) => news.id !== newsId);
            setList(updatedList);
        }
    }

    function editNews(newsId) {
        const news = list.find(({ id }) => id === newsId);
        const newTitle = prompt("Yangilikni tahrirlang:", news.newsName);
        const newBody = prompt("Yangilikni tahrirlang:", news.newsBody);

        if (newTitle && newBody) {
            const updatedList = list.map((news) =>
                news.id === newsId
                    ? { ...news, newsName: newTitle, newsBody: newBody }
                    : news
            );
            setList(updatedList);
        }
    }

    return (
        <div className="container mx-auto py-5">
            {list.length > 0 ? (
                <div className="space-y-6">
                    {list.map(({ newsName, id, newsBody }) => (
                        <div
                            key={id}
                            className="flex items-start space-x-4 bg-white shadow-md rounded-lg overflow-hidden p-4"
                        >
                            <div className="w-32 h-32 flex-shrink-0 bg-gray-200">
                                <img
                                    src={`https://picsum.photos/seed/${id}/200`}
                                    alt="News Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl font-bold text-gray-800">
                                    {newsName}
                                </h2>
                                <p className="text-sm text-gray-600 mt-2">
                                    {newsBody.length > 100
                                        ? `${newsBody.slice(0, 100)}...`
                                        : newsBody}
                                </p>
                                <button className="mt-3 text-blue-500 hover:underline">
                                    Batafsil o'qish
                                </button>
                            </div>
                            <div className="flex-shrink-0 flex flex-col items-end">
                                <button
                                    onClick={() => editNews(id)}
                                    className="text-yellow-500 hover:underline mb-2"
                                >
                                    ✏️ 
                                </button>
                                <button
                                    onClick={() => deleteNews(id)}
                                    className="text-red-500 hover:underline"
                                >
                                    🗑️ 
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">
                    Hozircha yangiliklar yo'q
                </p>
            )}
        </div>
    );
}
