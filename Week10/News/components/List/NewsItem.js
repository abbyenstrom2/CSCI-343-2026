
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";

export default function NewsItem(props) {
  const navigation = useNavigation();

  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      newsId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        {
          backgroundColor:
            props.listIndex % 2 === 0
              ? Colors.primary300
              : Colors.primary300o5,
        },
      ]}
    >
      <Pressable
        onPress={selectedNewsHandler}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: props.imageUrl }}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.headline}>
            {props.headline}
          </Text>

          <Text style={styles.date}>
            {props.date}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 16,
    borderRadius: 7,
    overflow: "hidden",
  },
  pressable: {
    padding: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  imageContainer: {
    height: 190,
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    paddingVertical: 10,
  },
  headline: {
    color: Colors.primary800,
    fontSize: 21,
    fontFamily: "playfairBold",
    paddingBottom: 6,
  },
  date: {
    color: Colors.primary500,
    fontSize: 14,
    fontFamily: "playfair",
  },
});
