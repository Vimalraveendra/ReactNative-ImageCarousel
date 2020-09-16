import React from 'react';

import {Image, StyleSheet, ScrollView, Dimensions, View} from 'react-native';

const {width} = Dimensions.get('window');
const height = (width * 100) / 60; // 80%

const Carousel = ({images, setChange, orientation}) => {
  console.log('orient', orientation);
  return (
    <View style={styles.imageScroll}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle
        onScroll={setChange}
        showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <Image
            key={index}
            style={
              orientation === '' || orientation === 'portrait'
                ? styles.imagePortrait
                : styles.imageLandscape
            }
            source={{
              uri: image,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePortrait: {
    width: width,
    height: height - 100,
    resizeMode: 'contain',
  },
  imageLandscape: {
    width: height + 120,
    height: width - 100,
    resizeMode: 'contain',
  },
});

export default Carousel;
