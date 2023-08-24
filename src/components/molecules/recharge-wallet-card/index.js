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

const RechargeWalletCard = ({item, style, onPress, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderWidth: item?.selected ? mvs(1) : mvs(0),
          borderColor: item?.selected ? colors.green : colors.white,
        },
      ]}>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={{alignItems: 'center'}}>
          <Paypal />
        </View>
        <View style={{flex: 1, paddingLeft: mvs(10), marginTop: mvs(10)}}>
          <Regular color={colors.darkBlack} label={'Recharge With PayPal'} />
        </View>
        {item?.selected ? (
          <View>
            <Select />
          </View>
        ) : (
          <></>
        )}
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(RechargeWalletCard);

{
  /* <ImageBackground
            borderRadius={mvs(10)}
            source={forklift}
            style={styles.backGroundImage}>
            {/* <Image source={{uri: item?.image}} style={styles.innerImage} />
           </ImageBackground> */
}
