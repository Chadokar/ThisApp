import React, { useState } from 'react'
import { Text, View , StyleSheet, Alert } from 'react-native';
import Onboarding from '../components/HorizontalSlider/Onboarding';
 
function Setvalue(){
    const [name , setName] = useState(0)


    function change () {
        console.log(name);
        if(name ===3)
        return;
        var a = name 
        
        if(a === 3){
            Alert('congratulation!! You have done all questions')
        }
        else{
            setName(a+1);
        }

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.container} onPress = {change} >
                <Text style={{padding:10}}  >{titleName[name].question }  </Text>
            </Text>
        </View>
    );
}

export const Algebra = () => {
    var titleName = [
        {question:true},
        {question:true},
        {question:true},
        {question:true},
    ]

    // function process(index) {
    //     console.log('index = '+index);
    //     setTitleName[index].question(false);
    // }

    const process = (index) => {
        console.log('index = ' + index + ' ' + titleName[index].question);
        titleName[index].question = false;

      }

    return (
        <Onboarding process={process} titleName={titleName} />
    );
}

const styles = StyleSheet.create({
    container: {
        padding :10,
        backgroundColor: 'grey'
    }
});

