import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useMemo, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import OrderReviewScreen from './screens/OrderReviewScreen';

import Colors from './constants/colors';
import HomeScreen from './screens/HomeScreen';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 3000,
  fade: true
})

export default function App() {
  const [loaded] = Font.useFonts({
    Note: require("./assets/fonts/Note.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

const [currentScreen, setCurrentScreen] = useState("");
const [currentPrice, setCurrentPrice] = useState(0);

const repairTimeRadioButtons = useMemo(
  () => [
    {
      id: "0",
      label: "Standard",
      value: "Standard",
      price: 6.5,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
    {
      id: "1",
      label: "Expedited",
      value: "Expedited",
      price: 50,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
    {
      id: "2",
      label: "Next Day",
      value: "Next Day",
      price: 100,
      borderColor: Colors.primary500,
      color: Colors.primary500,
    },
  ],
  []
);

const [repairTimeId, setRepairTimeId] = useState(0);
const [services, setServices] = useState([
    {
      id: 0,
      name: "Basic Tune-Up",
      value: false,
      price: 50
    },
    {
      id: 1,
      name: "Comprehensive Tune-Up",
      value: false,
      price: 75
    },
    {
      id: 2,
      name: "Flat Tire Repair",
      value: false,
      price: 20
    },
    { id: 3, 
      name: "Brake Servicing", 
      value: false, 
      price: 50 
    },
    { 
      id: 4, 
      name: "Gear Servicing", 
      value: false, 
      price: 40 
    },
    { 
      id: 5, 
      name: "Chain Servicing", 
      value: false, 
      price: 15 
    },
    { 
      id: 6, 
      name: "Frame Repair", 
      value: false, 
      price: 35 
    },
    { 
      id: 7, 
      name: "Safety Check", 
      value: false, 
      price: 25 
    },
    { 
      id: 8, 
      name: "Accessory Install", 
      value: false, 
      price: 10 
    },
]);

const [newsletter, setNewsletter] = useState(false);
const [rentalMembership, setRentalMembership] = useState(false);


function setServiceHandler(id){
  setServices((prevServices) => 
    prevServices.map((item) =>
      item.id == id ? { ...item, value: !item.value } : item)
  );
}

function setNewsletterHandler(id){
  setNewsletter((previous) => !previous
  );
}


function setRentalMembershipHandler() {
  setRentalMembership((previous) => !previous);
}


function homeScreenHandler() {
  setCurrentPrice(0);
  setRepairTimeId(0);

  setServices((prevServices) =>
    prevServices.map((item) => 
      ({ ...item, value: false
      }))
  );

  setNewsletter(false);
  setRentalMembership(false);
  setCurrentScreen("");
}

function orderReivewHandler() {
  let price = 0;
  for (let i = 0; i < services.length; i++) {
    if (services[i].value) {
      price = price + services[i].price
    }
  }

  price = price + repairTimeRadioButtons[repairTimeId].price;

  if (rentalMembership) {
    price = price + 100;
  }
  setCurrentPrice(price);

  setCurrentScreen("review");
}

let screen = (
  <HomeScreen
    repairTimeId ={repairTimeId} 
    services ={services}
    newsletter ={newsletter}
    rentalMembership ={rentalMembership}
    repairTimeRadioButtons ={repairTimeRadioButtons}
    onSetRepairTimeId ={setRepairTimeId}
    onSetServices ={setServiceHandler}
    onSetNewsletter ={setNewsletterHandler}
    onSetRentalMembership ={setRentalMembershipHandler}
    onNext={orderReivewHandler}
/>
);

if (currentScreen === "review") {
  screen = (
    <OrderReviewScreen 
      repairTime={repairTimeRadioButtons[repairTimeId].value}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      price={currentPrice}

      onNext={homeScreenHandler}
    />
  );
}


  if (!loaded) {
    return null;
  }


  return (
    <>
    <StatusBar style="light" />
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
