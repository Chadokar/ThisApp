import react , { useState , useRef } from "react";
import { View, Text, StyleSheet, FlatList , Animated } from 'react-native'

import datas from "./datas";
import NextButton from "./NextButton";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";

export default Onboarding = ( {process , titleName} ) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => { setCurrentIndex(viewableItems[0].index); }).current;

  const slidesRef = useRef(null);

  // const viewConfig = useRef({ viewAreaCoveragePercentThresold: 50 }).current;

  const scrollTo = () => {
    if(currentIndex < datas.length -1){
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
      // if(currentIndex === datas.length -2 ){
      //   setCurrentIndex(currentIndex+1);
      // }
    }
    else {
      console.log('last item.');
    }
  }
  const scrollBack = () => {
    if(currentIndex >= 1){
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
    else {
      console.log('first item.');
    }
  }

  return (
    <View style={styles.container} >
      <View style = {{flex:3}} >
        <FlatList data = {datas} 
          renderItem = { ({ item }) => <OnboardingItem item = {item} /> }
          horizontal
          showsHorizontalScrollIndicator = {false}
          pagingEnabled

          bounces = {false}

          keyExtractor={(item) => item.id}

          onScroll = {Animated.event([{ nativeEvent:{ contentOffset: { x: scrollX }}}], { useNativeDriver:false, })}

          scrollEventThrottle = {32}

          onViewableItemsChanged = {viewableItemsChanged}

          // viewabilityConfig = {viewConfig}

          ref = {slidesRef}

        />
      </View>

    {/* <Paginator data={datas} scrollX={scrollX} />  */}

    <NextButton length={datas.length} process={process} titleName={titleName} scrollTo={scrollTo} scrollBack={scrollBack} index={currentIndex} percentage={(currentIndex + 1)*(100/datas.length) } />

    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});