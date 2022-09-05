import React ,{ useState , useRef, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity , Animated } from 'react-native'

import { Svg, G , Circle } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons'
import { ProgressBar} from 'react-native-paper';

function NextButton({ percentage , scrollTo ,scrollBack , process, length , index ,titleName }) {
  const [value , setValue] = useState(0);
  const MyProgress = () => (
    <ProgressBar style={styles.progress} progress={value/length} color={'#65298A'}  width={'100%'} />
  );
  const change = () => {
    if(titleName[index].question === true ){
    setValue(value+1);
    process(index);
    }
    else{
      console.log(index + 'you have done this');
    }
  }
  console.log('currentindex = ' + index);

  return (
    <>
    <View style={styles.container} >

      <TouchableOpacity onPress={scrollBack} style={styles.button} activeOpacity={0.6} >
        <AntDesign name='arrowleft' size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={change} style={styles.button} activeOpacity={0.6} >
        <AntDesign name='checkcircleo' size={32} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6} >
        <AntDesign name='arrowright' size={32} color="#fff" />
      </TouchableOpacity>
    </View>
      <MyProgress/>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    button: {
        backgroundColor: '#65298A',
        borderRadius: 5,
        paddingRight: 40,
        paddingLeft: 40,
        padding: 15,
        margin: 10,
    },
    progress: {
      justifyContent: 'center',
      marginBottom: 30,
      margin:15,
    }
});

export default NextButton
