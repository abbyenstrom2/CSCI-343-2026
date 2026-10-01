import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { useState } from "react";
import Homescreen from "./screens/Homescreen";
import Recipescreen from "./screens/recipescreen";
import Addrecipescreen from './screens/Addrecipescreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from "./constants/colors";


export default function App() {
  // Set up our custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID]= useState(4);
  const [currentrecipe, setCurrentrecipe] = useState([
    {
      id: 1,
      title: "Spaghetti",
      text: "Bring pot of water to a boil\nPour Spaghetti Noodles into boiling water\nIn a different pot pour sauce into pot on low/medium heat and let it simmer\nOnce noodles are cooked strain them and mix them into the sauce"
    },
    {
      id: 2,
      title: "Ceaser Chicken",
      text: "Pre Heat oven to 400 Degrees. Pour Ceaser Dressing into a baking dish. Place the chicken breast into the baking dish and flip them so they are coated evenly. Bake until the chicken is golden brown. Grate parmesan cheese and layer the top of the chicken with it. Broil the chicken until the cheese is melted.   ",
    },
    {
      id: 3,
      title: "Bang Bang Salmon",
      text: "Mix equal parts of mayonnaise and sweet chili sauce with a spash of Sriracha in a bowl to make the bang bang sauce. Spoon the sauce over the salmon fillets and air fry at 400 degrees for 10 minutes.",
    },
  ]);


  function homeScreenHandler() {
    setCurrentScreen("");
  }

  function RecipeScreenHandler(){
    setCurrentScreen("recipe");
  }

  function AddRecipeScreenHandler(){
    setCurrentScreen("add");
  }

  function AddRecipeHandler(enteredRecipeTitle, enteredRecipeText){
    setCurrentrecipe((currentrecipe) => [
      ...currentrecipe,
      {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText},
    ]);
    setCurrentID(currentID + 1);
    RecipeScreenHandler();
  }

  function deleteRecipeHandler(id){
    setCurrentrecipe((currentrecipe) =>{
      return currentrecipe.filter((item) => item.id !== id);
    });
  }

  let screen = <Homescreen onNext={RecipeScreenHandler} />;

  if (currentScreen === "recipe"){
    screen = (
    <Recipescreen 
      onHome={homeScreenHandler}
      onAdd={AddRecipeScreenHandler} 
      onDelete={deleteRecipeHandler}
      currentrecipe={currentrecipe}
    />
    );
  }

  if (currentScreen === "add"){
    screen = (
    <Addrecipescreen 
    onCancel={RecipeScreenHandler}
    onAdd={AddRecipeHandler}/>
    );
  }

  return (
   <>
   <StatusBar style="auto"/>
   <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
   </>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
