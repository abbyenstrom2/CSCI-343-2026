import { View, Text, StyleSheet, ScrollView, Switch, ImageBackground } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from '../constants/colors';
import Title from '../components/TitleComponent.js';
import NavButton from '../components/NavButtonComponent';
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function HomeScreen(props) {

  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/images/bikeback.jpeg")}
      resizeMode="cover"
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >

      <View
        style={[
          styles.contentContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >

        {/* Title */}
        <View style={styles.titleContainer}>
          <Title>The Bike Barn</Title>
        </View>


        <ScrollView style={styles.scrollContainer}>

          {/* Repair Time Options */}
          <View style={styles.radioContainer}>

            <Text style={styles.radioHeader}>
              Service Time:
            </Text>

            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabel}
            />

          </View>


          {/* Service Options */}
          <View style={styles.checkBoxContainer}>

            <Text style={styles.checkBoxHeader}>
              Service Options:
            </Text>

            <View style={styles.checkBoxSubContainer}>

              {props.services.map((item) => {

                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={`${item.name} ($${item.price})`}
                    onPress={props.onSetServices.bind(this, item.id)}

                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                      fontFamily: "Note"
                    }}

                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}

                    iconStyle={{
                      borderRadius: 0
                    }}

                    fillColor={Colors.primary500}

                    style={styles.checkBox}
                  />
                );

              })}

            </View>

          </View>


          {/* Switches */}
          <View style={styles.switchContainer}>

            {/* Newsletter */}
            <View style={styles.addOnsSubContainer}>

              <Text style={styles.addOnsLabel}>
                Newsletter ($0)
              </Text>

              <Switch
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}

                thumbColor={
                  props.newsletter
                    ? Colors.primary500
                    : Colors.primary800
                }

                trackColor={{
                  false: "#767577",
                  true: "#81b0ff"
                }}
              />

            </View>


            {/* Rental Membership */}
            <View style={styles.addOnsSubContainer}>

              <Text style={styles.addOnsLabel}>
                Rental Membership ($100)
              </Text>

              <Switch
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}

                thumbColor={
                  props.rentalMembership
                    ? Colors.primary500
                    : Colors.primary800
                }

                trackColor={{
                  false: "#767577",
                  true: "#81b0ff"
                }}
              />

            </View>

          </View>


          {/* Submit Button */}
          <View style={styles.buttonContainer}>

            <NavButton onNext={props.onNext}>
              Submit Order
            </NavButton>

          </View>

        </ScrollView>

      </View>

    </ImageBackground>
  );
}


const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    opacity: 0.3
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 30,
    borderColor: Colors.primary500
  },

  scrollContainer: {
    flex: 1,
    width: "100%"
  },

  radioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  radioHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note"
  },

  radioGroup: {
    paddingBottom: 20
  },

  radioGroupLabel: {
    fontSize: 15,
    color: Colors.primary500,
    fontFamily: "Note"
  },

  checkBoxContainer: {
    width: "100%",
    paddingHorizontal: 24,
    marginBottom: 15
  },

  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note",
    textAlign: "center",
    marginBottom: 10
  },

  checkBoxSubContainer: {
    padding: 2,
    width: "100%"
  },

  checkBox: {
    padding: 2,
    width: "100%"
  },

  switchContainer: {
    width: "90%",
    marginBottom: 15
  },

  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },

  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 18,
    fontFamily: "Note"
  },

  buttonContainer: {
    alignItems: "center",
    marginBottom: 20
  }

});