import {HomeImage} from 'assets/images';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';

const OrderSwiperCard = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        scrollEnabled={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        style={styles.wrapper}
        showsButtons={false}>
        {[0, 0, 0].map((item, index) => (
          <ImageBackground
            key={index}
            borderRadius={mvs(10)}
            source={HomeImage}
            style={styles.slide}></ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};
export default OrderSwiperCard;

const styles = StyleSheet.create({
  container: {
    height: mvs(400),
    paddingVertical: mvs(20),
    backgroundColor: colors.white,
    marginTop: mvs(10),
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    // borderRadius: mvs(10),
    borderBottomRightRadius: mvs(10),
    borderBottomLeftRadius: mvs(10),
    resizeMode: 'cover',
  },
  dotStyle: {backgroundColor: colors.gray},
  activeDotStyle: {backgroundColor: colors.primary},
  wrapper: {},
  slide: {
    flex: 1,
  },

  heartIcon: {
    alignSelf: 'flex-end',
    paddingRight: mvs(20),
    marginTop: mvs(20),
  },
});
