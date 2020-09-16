import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

const Pagination = ({images, active, orientation}) => {
  return (
    <View
      style={
        orientation === '' || orientation === 'portrait'
          ? styles.paginationPortrait
          : styles.paginationLandscape
      }>
      {images.map((item, index) => {
        return (
          <Text
            key={index}
            style={
              index === active
                ? styles.paginationActiveText
                : styles.paginationText
            }>
            {' '}
            &#11044;{' '}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationPortrait: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 330,
    alignSelf: 'center',
  },
  paginationLandscape: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  paginationText: {
    color: '#888',
    margin: 3,
  },
  paginationActiveText: {
    color: '#000',
    margin: 3,
  },
});

export default Pagination;
