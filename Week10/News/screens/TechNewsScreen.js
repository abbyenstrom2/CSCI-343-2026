import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

export default function TechNewsScreen() {
  const displayedNews = NEWS.filter(
    (newsItem) => newsItem.category === "Tech"
  );

  return <List items={displayedNews} />;
}