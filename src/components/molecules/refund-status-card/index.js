import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import {Paypal, Select} from 'assets/icons';

const RefundStatusCard = ({item, style, onPress, loading}) => {
  return (
    <View style={styles.container}>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.innerContainer}></View>
        <View
          style={{
            paddingHorizontal: mvs(11),
            paddingVertical: mvs(14),
            width: '70%',
          }}>
          <Regular label={'Shipping Container'} />
          <Regular
            numberOfLines={2}
            color={colors.darkBlack}
            fontSize={mvs(10)}
            label={
              'The 20ft dry container is ideal for moving smaller shipments of dry goods.'
            }
          />
          <Regular
            style={{marginTop: mvs(17)}}
            color={colors.darkBlack}
            fontSize={mvs(10)}
            label={'202104002-050430'}
          />
          <Regular
            style={{marginTop: mvs(5)}}
            color={colors.darkBlack}
            fontSize={mvs(10)}
            label={'Date: 02-08-2023'}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Regular fontSize={mvs(12)} label={'$12.000'} />
          <Regular color={colors.red} fontSize={mvs(12)} label={'Rejected'} />
        </View>
      </Row>
    </View>
  );
};
export default React.memo(RefundStatusCard);

{
  /* <ImageBackground
            borderRadius={mvs(10)}
            source={forklift}
            style={styles.backGroundImage}>
            {/* <Image source={{uri: item?.image}} style={styles.innerImage} />
           </ImageBackground> */
}
