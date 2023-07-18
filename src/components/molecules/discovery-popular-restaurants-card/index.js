import {HomeImage} from 'assets/images';
import {Row} from 'components/atoms/row';
import MyRanking from 'components/atoms/stars-ranking';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import Medium from 'typography/medium-text';
import styles from './style';
import {PrimaryButton} from 'components/atoms/buttons';

const DiscoveryPopularRestaurantsCard = ({item, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        borderRadius={mvs(10)}
        source={{uri: item?.image}}
        style={styles.backGroundImage}>
        {/* <Image source={HomeImage} style={styles.innerImage} /> */}
        <Row style={styles.BtnConatiner}>
          <Row style={styles.iconBtn}>
            <Ionicons name={'car'} size={25} color={colors.primary} />
            <Bold fontSize={mvs(10)} label={'35 minutes'} />
          </Row>
          <PrimaryButton
            textStyle={{color: colors.black}}
            containerStyle={styles.menubtn}
            title={'Menu'}
          />
        </Row>
      </ImageBackground>

      <Bold style={styles.rankText} label={4.9} />

      <Row style={{paddingHorizontal: mvs(10), alignItems: 'center'}}>
        <View style={{flex: 1, paddingRight: mvs(5)}}>
          <Bold
            numberOfLines={1}
            style={{color: colors.black}}
            label={item?.name}
          />
        </View>
        <MyRanking starSize={mvs(15)} />
      </Row>
      <Row style={{paddingHorizontal: mvs(10)}}>
        <View style={{width: mvs(120), flex: 1}}>
          <Medium
            fontSize={mvs(12)}
            style={{color: colors.black}}
            label={item?.location}
            numberOfLines={2}
          />
        </View>
        <Light
          style={{marginRight: mvs(17)}}
          fontSize={mvs(10)}
          label={'40 Reviews'}
        />
      </Row>
      <Medium
        style={{paddingHorizontal: mvs(10)}}
        fontSize={12}
        label={'City'}
      />
    </TouchableOpacity>
  );
};
export default React.memo(DiscoveryPopularRestaurantsCard);
