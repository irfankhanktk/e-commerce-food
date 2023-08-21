import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Bold from 'typography/bold-text';

const ChatCard = ({item, style, onPress, loading}) => {
  return (
    <View style={styles.container}>
      <Row style={styles.InnerContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground
            borderRadius={mvs(10)}
            source={forklift}
            style={styles.backGroundImage}>
            {/* <Image source={{uri: item?.image}} style={styles.innerImage} /> */}
          </ImageBackground>
        </View>
        <View style={{paddingHorizontal: mvs(10), flex: 1}}>
          <Bold label={'Mitsubishi'} />
          <Regular numberOfLines={1} label={'Mitsubishi@email.com'} />
        </View>
        <Regular label={'08:06'} />
      </Row>
    </View>
  );
};
export default React.memo(ChatCard);
