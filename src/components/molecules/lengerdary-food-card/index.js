import {HomeImage} from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import styles from './style';

const LegendaryFoodCard = ({item, style, onPress}) => {
  const [add, setAdd] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={HomeImage}
          style={styles.backGroundImage}>
          {/* <Image source={HomeImage} style={styles.innerImage} /> */}
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Bold style={{color: colors.black}} label={'Cheezious'} />
        <Light
          style={{marginTop: mvs(5)}}
          numberOfLines={2}
          fontSize={mvs(10)}
          label={
            'A fried egg is a cooked dish made from one or more eggs whic...'
          }
        />
      </View>
    </View>
  );
};
export default React.memo(LegendaryFoodCard);
