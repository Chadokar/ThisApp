import react from "react";
import { View, Text, StyleSheet} from "react-native";

import { DrawerContentScrollView, DrawerItemList,DrawerItem, ItemList, } from "@react-navigation/drawer";
import { Drawer } from 'react-native-paper';

function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props} >
            <View style = {{flex: 1, padding: 10,borderBottomWidth:1,borderBottomColor:'black'}} >
                <Text style={{color:'black',font:'bold'}} >Home</Text>
            </View>
            <Drawer.Section >
                <DrawerItem style={{ backgroundColor: '#64ffda' }} label="Home" onPress={()=>{props.navigation.navigate('Home')}} />
                <DrawerItem style={{ backgroundColor: '#64ffda' }} label="Notification" onPress={()=>{props.navigation.navigate('Notifications')}} />
            </Drawer.Section>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        margin: 20
    }
})
  