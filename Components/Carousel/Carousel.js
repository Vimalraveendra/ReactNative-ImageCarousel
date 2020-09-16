import React from 'react';

import {Image, StyleSheet, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = (width * 100) / 60; // 80%

const Carousel = ({images, setChange}) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle
      onScroll={setChange}
      showsHorizontalScrollIndicator={false}>
      {images.map((image, index) => (
        <Image
          key={index}
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
});

export default Carousel;
