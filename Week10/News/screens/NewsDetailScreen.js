
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { NEWS } from "../data/dummy_data";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";

export default function NewsDetailScreen({ route }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const newsId = route.params.newsId;

  const selectedNews = NEWS.find(
    (newsItem) => newsItem.id === newsId
  );

  if (!selectedNews) {
    return (
      <View style={styles.centered}>
        <Text>News article not found.</Text>
      </View>
    );
  }

  function bookmarkHandler() {
    setIsBookmarked((currentValue) => !currentValue);
  }

  return (
    <ScrollView style={styles.screen}>
      <Image
        source={{ uri: selectedNews.imageUrl }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.headingRow}>
          <Text style={styles.headline}>
            {selectedNews.headline}
          </Text>

          <BookmarkButton
            pressed={isBookmarked}
            onPress={bookmarkHandler}
          />
        </View>

        <Text style={styles.date}>{selectedNews.date}</Text>

        <Text style={styles.byline}>
          By {selectedNews.author} · {selectedNews.agency}
        </Text>

        <Text style={styles.description}>
          {selectedNews.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary300,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  headline: {
    flex: 1,
    fontSize: 26,
    fontFamily: "playfairBold",
    color: Colors.primary800,
  },
  date: {
    marginTop: 12,
    fontSize: 14,
    color: Colors.primary500,
    fontFamily: "playfair",
  },
  byline: {
    marginTop: 8,
    fontSize: 15,
    color: Colors.primary500,
    fontFamily: "playfairItalic",
  },
  description: {
    marginTop: 20,
    fontSize: 17,
    lineHeight: 27,
    color: Colors.primary800,
    fontFamily: "playfair",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
