import React from 'react';

import {Image, StyleSheet, ScrollView, Dimensions, View} from 'react-native';

const {width} = Dimensions.get('window');
const height = (width * 100) / 60; // 80%

const Carousel = ({images, setChange}) => {
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
            style={styles.image}
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
  image: {
    width: width,
    height: height - 100,
    resizeMode: 'cover',
  },
});

export default Carousel;
