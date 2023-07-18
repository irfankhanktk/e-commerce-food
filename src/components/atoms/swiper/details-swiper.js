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

const DetailsSwiperCard = ({data = [0, 0, 0]}) => {
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
        {data.map((item, index) => (
          <ImageBackground
            key={index}
            borderRadius={mvs(10)}
            source={item ? {uri: item} : HomeImage}
            style={styles.slide}>
            <TouchableOpacity
              onPress={() => setLikeStatus(!likeStatus)}
              style={styles.heartIcon}>
              <AntDesign
                name={likeStatus ? 'heart' : 'hearto'}
                size={30}
                color={'red'}
              />
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};
export default DetailsSwiperCard;

const styles = StyleSheet.create({
  container: {
    height: mvs(220),
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
