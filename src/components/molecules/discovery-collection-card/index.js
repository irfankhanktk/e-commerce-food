import {Collection, HomeImage} from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React, {useState} from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import styles from './style';
import {fonts} from 'assets/fonts';
import Regular from 'typography/regular-text';

const DiscoveryCollectionCard = ({item, style, onPress}) => {
  const [add, setAdd] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        borderRadius={mvs(10)}
        source={HomeImage}
        style={styles.backGroundImage}>
        <View
          style={{
            paddingHorizontal: mvs(10),
            backgroundColor: '#00000040',

            paddingBottom: mvs(20),
          }}>
          <Bold label={item?.name} fontSize={mvs(16)} color={colors.white} />
          <Regular
            color={colors.white}
            fontSize={mvs(12)}
            numberOfLines={3}
            label={item?.description}
          />
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Bold label={'More'} color={colors.white} />
            <Entypo
              style={{marginLeft: mvs(15)}}
              name="arrow-long-right"
              color={colors.white}
              size={20}
            />
          </Row>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default React.memo(DiscoveryCollectionCard);
