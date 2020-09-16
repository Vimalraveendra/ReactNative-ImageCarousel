import React from 'react';

import {SafeAreaView, Text, StyleSheet, Dimensions} from 'react-native';

import Carousel from './Components/Carousel/Carousel';
import Pagination from './Components/Pagination/Pagination';

const images = [
  'https://cdn.pixabay.com/photo/2017/12/11/15/34/lion-3012515_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/03/23/09/38/swan-293157_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/01/06/23/03/sunrise-1959227_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/02/19/11/42/selfie-1209886_1280.jpg',
  'https://cdn.pixabay.com/photo/2019/11/30/20/43/mountain-hut-4664186_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/05/13/18/58/nature-5168551_1280.jpg',
];
class App extends React.Component {
  state = {
    active: 0,
    orientation: '',
  };

  componentDidMount() {
    Dimensions.addEventListener('change', this.getOrientation);
  }

  setChange = ({nativeEvent}) => {
    const slider = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slider !== this.state.active) {
      this.setState({active: slider});
    }
  };
  getOrientation = () => {
    const {width, height} = Dimensions.get('window');
    if (width < height) {
      this.setState({orientation: 'portrait'});
    } else {
      this.setState({orientation: 'landscape'});
    }
  };
  render() {
    const {active, orientation} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Image Carousel</Text>
        <Carousel
          images={images}
          setChange={this.setChange}
          orientation={orientation}
        />
        <Pagination images={images} active={active} orientation={orientation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default App;
