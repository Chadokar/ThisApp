// import React from 'react';
// import { Button, View, Text, StyleSheet } from 'react-native';

// export default function NotificationsScreen({ navigation }) {
// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
//     </View>
// );
// }

import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.back} >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  back: {
    flex: 1,
    backgroundColor: '#65298A',
  }
})
