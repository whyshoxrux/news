import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export default function NewsItem({
    title,
    deleteNews,
    id,
    editNews,
    list,
    setList,
    description,
}) {
    function editedNews(newsId) {
        const news = list.find(({ id }) => id === newsId);
        const newnewsName = prompt(
            "Yangi yangilik nomini kiriting:",
            news.newsName
        );
        const newnews = {
            newsName: newnewsName,
            id: newsId,
            newsBody: news.newsBody,
        };
        setList(editNews(newnews, list));
    }

    return (
        <Card className="shadow-lg border border-gray-200 rounded-lg">
            <CardHeader>
                <CardTitle className="text-lg font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 text-sm">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button
                    className="bg-red-500 text-white hover:bg-red-600"
                    onClick={() => {
                        if (confirm("Rostdan ham o'chirmoqchimisiz?")) {
                            setList(deleteNews(id, list));
                        }
                    }}
                    variant="destructive"
                >
                    <TrashIcon />
                </Button>
                <Button
                    className="border border-gray-300 text-gray-700 hover:bg-gray-100"
                    onClick={() => editedNews(id)}
                    variant="outline"
                >
                    <Pencil1Icon />
                </Button>
            </CardFooter>
        </Card>
    );
}
