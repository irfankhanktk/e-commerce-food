import React from 'react';
import {TouchableOpacity, ImageBackground, Image} from 'react-native';
import Medium from 'typography/medium-text';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {HomeImage, MenuImage} from 'assets/images';
import {mvs} from 'config/metrices';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import {View} from 'react-native';

const HomeCard = ({item, style, onPress, loading}) => {
  // console.log('shop check========>', item);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        borderRadius={mvs(10)}
        source={{uri: item?.image}}
        style={styles.backGroundImage}>
        {/* <Image source={{uri: item?.image}} style={styles.innerImage} /> */}
      </ImageBackground>
      <Row style={{paddingHorizontal: mvs(10), marginTop: mvs(20)}}>
        <Medium style={{color: colors.black}} label={item?.name} />
        <Row>
          <Row>
            <Regular fontSize={mvs(12)} label={'4.9'} />
            <Bold
              fontSize={mvs(12)}
              style={{marginLeft: mvs(5)}}
              label={'(10)'}
            />
          </Row>
          <Entypo
            style={{marginLeft: mvs(10)}}
            size={20}
            name={'star'}
            color={colors.green}
          />
        </Row>
      </Row>
      <Row style={{paddingHorizontal: mvs(10)}}>
        <View style={{flex: 1}}>
          <Light numberOfLines={1} label={item?.location} fontSize={mvs(12)} />
        </View>
        <Row>
          <Light label={'3 km'} fontSize={mvs(12)} />
          <Ionicons
            style={{marginLeft: mvs(10)}}
            size={20}
            name={'car-sharp'}
            color={colors.green}
          />
        </Row>
      </Row>
      <Row style={{paddingHorizontal: mvs(10), marginTop: mvs(5)}}>
        <Row>
          <Ionicons name={'pricetag-sharp'} size={15} color={colors.green} />
          <Regular
            style={{marginLeft: mvs(5)}}
            label={'Min Order '}
            fontSize={12}
          />
          <Bold label={'Rs 999 '} fontSize={12} />
          <Row style={{marginLeft: mvs(15)}}>
            <MaterialIcons
              name={'watch-later'}
              size={15}
              color={colors.green}
            />
            <Light
              style={{marginLeft: mvs(5)}}
              label={'12-15 min'}
              fontSize={mvs(12)}
            />
          </Row>
        </Row>
        <Entypo
          style={{marginLeft: mvs(10)}}
          size={25}
          name={'circle-with-plus'}
          color={colors.green}
        />
      </Row>
      <Row style={{justifyContent: 'flex-start'}}>
        <Ionicons
          style={{marginLeft: mvs(10)}}
          size={20}
          name={'car-sharp'}
          color={colors.green}
        />
        <Light
          style={{marginLeft: mvs(10)}}
          label={'Free ride (min 2 persons)'}
          fontSize={mvs(12)}
        />
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(HomeCard);
