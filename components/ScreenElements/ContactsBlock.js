import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import PhoneIcon from '../Icons/PhoneIcon';
import AddressIcon from '../Icons/AddressIcon';


export default function ContactsBlock(props){
    return(
            <View>
                <View style={styles.centerIcon}>
                    <PhoneIcon />
                </View>
                <View>
                    <Text style={styles.contactInfoContainer}>
                        <Text style={{ fontWeight: "500" }}>Контакты {"\n"}</Text>
                        <Text>
                        Челябинск: +7(351) 218-85-45 {"\n"}Екатеринбург: +7(351) 218-85-45{" "}
                        {"\n"}
                        </Text>
                    </Text>
                </View>

                <View>
                    <Text style={styles.contactInfoContainer}>
                        <Text style={{ fontWeight: "500", fontSize: 16 }}>
                        sales@zaycev.net {"\n"}
                        </Text>
                    </Text>
                </View>

                <View style={styles.centerIcon}>
                    <AddressIcon />
                </View>

                <View>
                    <Text style={styles.contactInfoContainer}>
                        <Text style={{ fontWeight: "500" }}>Адрес {"\n"}</Text>
                            <Text>
                            Челябинск, ул. Энтузиастов, 30,{"\n"}офис 215{"\n"}
                            </Text>
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
        marginTop: -15,
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