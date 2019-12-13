import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import PhoneIcon from '../Icons/PhoneIcon';
import AddressIcon from '../Icons/AddressIcon';
import B from "../TextBlocks/Bold";


export default function ContactsBlock(props){
    return(
            <View>
                <View style={styles.centerIcon}>
                    <PhoneIcon />
                </View>
                <View>
                    <Text style={styles.contactInfoContainer}>
                        <B>Контакты</B>
                    </Text>
                    <Text style={styles.contactInfoContainer}>
                        Челябинск: +7(351) 218-85-45 
                    </Text>
                    <Text style={styles.contactInfoContainer}>
                        Екатеринбург: +7(351) 218-85-45
                    </Text> 
                </View>
                <View>
                    <Text style={styles.contactInfoContainer}>
                        <B>sales@zaycev.net</B>
                    </Text>
                </View>

                <View style={styles.centerIcon}>
                    <AddressIcon />
                </View>

                <View>
                    <Text style={styles.contactInfoContainer}>
                        <B>Адрес</B>
                    </Text>
                    <Text style={styles.contactInfoContainer}>
                        Челябинск, ул. Энтузиастов, 30,
                    </Text>
                    <Text style={styles.contactInfoContainer}>
                        офис 215
                    </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    centerIcon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 15
    },
    contactInfoContainer: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 23,
        textAlign: "center",
        color: Colors.baseTextColor
    },
});