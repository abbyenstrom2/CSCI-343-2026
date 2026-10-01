import { StyleSheet, TextInput, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavButton from '../components/NavButton';
import Title from '../components/Title';
import Colors from '../constants/colors';
import { useState } from 'react';

export default function Addrecipescreen(props) {
      // Set Safe Area Screen Boundaries
      const insets = useSafeAreaInsets();

      const [RecipeTitle, setRecipeTitle] = useState("");
      const [RecipeText, setRecipeText] = useState("");

      function addRecipeHandler(){
          props.onAdd(RecipeTitle, RecipeText);
      }

    return (
      <View
      style={[
          styles.rootContainer,
          {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
          },
      ]}
      >
          <View style={styles.titleContainer}>
              <Title>Add Recipe</Title>
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView>
              <View style={styles.recipeTitleContanier}>
                <TextInput
                  onChangeText={setRecipeTitle}
                  placeholder="Enter Recipe Title Here"
                  style={styles.RecipeTitle}
                />
              </View>

              <View style={styles.recipeTextContainer}>
                <TextInput
                  onChangeText={setRecipeText}
                  placeholder="Enter Recipe Text Here"
                  textAlignVertical="top"
                  multiline={true}
                  numberOfLines={20}
                  style={styles.RecipeText}
                />
              </View>

          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
            </ScrollView>
          </View>
      </View> 
    );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50
  },
  scrollContainer: {
    flex: 5
  },
  recipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300
  },
  RecipeTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30
  },
  RecipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start"
  },
  RecipeText: {
    color: Colors.primary800
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  navButton: {
    marginHorizontal: 10
  }
});