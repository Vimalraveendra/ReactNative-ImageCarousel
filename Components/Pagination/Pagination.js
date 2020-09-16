import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

const Pagination = ({images, active}) => {
  return (
    <View style={styles.pagination}>
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
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 200,
    alignSelf: 'center',
  },
  paginationText: {
    color: '#888',
    margin: 3,
  },
  paginationActiveText: {
    color: '#fff',
    margin: 3,
  },
});

export default Pagination;
