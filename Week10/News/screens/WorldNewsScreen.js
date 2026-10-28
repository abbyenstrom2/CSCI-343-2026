import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

export default function WorldNewsScreen() {
  const displayedNews = NEWS.filter(
    (newsItem) => newsItem.category === "World"
  );

  return <List items={displayedNews} />;
}
