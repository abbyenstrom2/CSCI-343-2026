import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

export default function USNewsScreen() {
  const displayedNews = NEWS.filter(
    (newsItem) => newsItem.category === "US"
  );

  return <List items={displayedNews} />;
}
