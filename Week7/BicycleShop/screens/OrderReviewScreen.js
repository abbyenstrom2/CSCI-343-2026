import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View, ScrollView, Text, } from 'react-native';

import NavButton from '../components/NavButtonComponent';
import Title from '../components/TitleComponent';
import Colors from '../constants/colors';

import { LinearGradient } from "expo-linear-gradient";


export default function OrderReviewScreen(props) {

    // Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

    // Calculate sales tax
    const salesTax = props.price * 0.06;

    // Calculate final total
    const finalTotal = props.price + salesTax;


    return (
        <LinearGradient
            colors={[
                Colors.accent500,
                Colors.primary800,
                Colors.primary300
            ]}
            style={styles.container}
        >

            <View
                style={[
                    styles.container,
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
                    <Title>Order Summary</Title>
                </View>


                <ScrollView style={styles.scrollContainer}>

                    {/* Order Message */}
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>
                            Your order has been placed with your order details below!
                        </Text>
                    </View>


                    {/* Repair Time */}
                    <View style={styles.ingredientsContainer}>

                        <Text style={styles.ingredient}>
                            Service Time:
                        </Text>

                        <Text style={styles.subIngredient}>
                            {props.repairTime}
                        </Text>


                        {/* Selected Services */}
                        <Text style={styles.ingredient}>
                            Services:
                        </Text>

                        {props.services.map((item) => {

                            if (item.value) {

                                return (
                                    <Text
                                        key={item.id}
                                        style={styles.subIngredient}
                                    >
                                        {item.name} - ${item.price.toFixed(2)}
                                    </Text>
                                );

                            }

                        })}


                        {/* Newsletter */}
                        <Text style={styles.ingredient}>
                            Newsletter:
                        </Text>

                        <Text style={styles.subIngredient}>
                            {props.newsletter ? "Yes" : "No"}
                        </Text>


                        {/* Rental Membership */}
                        <Text style={styles.ingredient}>
                            Rental Membership:
                        </Text>

                        <Text style={styles.subIngredient}>
                            {props.rentalMembership
                                ? "Yes - $100.00"
                                : "No"}
                        </Text>

                    </View>


                    {/* Price Breakdown */}
                    <View style={styles.subTitleContainer}>

                        <Text style={styles.subTitle}>
                            Subtotal: ${props.price.toFixed(2)}
                        </Text>

                        <Text style={styles.subTitle}>
                            Sales Tax (6%): ${salesTax.toFixed(2)}
                        </Text>

                        <Text style={styles.subTitle}>
                            Final Total: ${finalTotal.toFixed(2)}
                        </Text>

                    </View>


                    {/* Return Home Button */}
                    <View style={styles.buttonContainer}>

                        <NavButton onNext={props.onNext}>
                            Return Home
                        </NavButton>

                    </View>

                </ScrollView>

            </View>

        </LinearGradient>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
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
        width: "100%",
    },

    subTitleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },

    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Note"
    },

    ingredientsContainer: {
        flex: 3,
        width: "100%",
        paddingHorizontal: 20,
    },

    ingredient: {
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: "Note",
        marginTop: 10,
    },

    subIngredient: {
        textAlign: "center",
        fontSize: 17,
        color: Colors.primary500,
        fontWeight: "bold",
        fontFamily: "Note",
    },

    buttonContainer: {
        alignItems: "center",
        marginVertical: 20,
    },

});
