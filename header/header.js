import React  from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { color } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";

export default function Header (){
    const openMenu =() => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header} >
            <View>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            </View>
            <View >
                <Text style={styles.headerText} > Home  </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        header: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        color: 'white' 
    }
})