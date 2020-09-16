import React from 'react';

import {SafeAreaView, Text, StyleSheet, Dimensions, View} from 'react-native';

import Carousel from './Components/Carousel/Carousel';

const {width} = Dimensions.get('window');
const height = (width * 100) / 60; // 80%

const images = [
  'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/06/27/17/48/fantasy-3502188_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/08/07/01/41/camera-2598507_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/02/19/11/42/selfie-1209886_1280.jpg',
];
class App extends React.Component {
  state = {active: 0};

  setChange = ({nativeEvent}) => {
    const slider = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slider !== this.state.active) {
      this.setState({active: slider});
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Image Carousel</Text>
        <Carousel images={images} setChange={this.setChange} />

        <View style={styles.pagination}>
          {images.map((item, index) => {
            return (
              <Text
                key={index}
                style={
                  index === this.state.active
                    ? styles.paginationActiveText
                    : styles.paginationText
                }>
                {' '}
                &#11044;{' '}
              </Text>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10,
  },

  image: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 300,
    alignSelf: 'center',
  },
  paginationText: {
    color: '#888',
    margin: 10,
  },
  paginationActiveText: {
    color: '#fff',
    margin: 10,
  },
});

export default App;
