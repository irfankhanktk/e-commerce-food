import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {PrimaryButton} from 'components/atoms/buttons';
import {Delete} from 'assets/icons';

const CartCard = ({item, style, onPress, loading}) => {
  const [count, setCount] = React.useState(1);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.imageMainContainer}>
          <View style={{backgroundColor: 'white', height: mvs(110)}}>
            <View style={{marginLeft: mvs(10)}}>
              <ImageBackground
                source={{
                  uri: 'https://png.pngitem.com/pimgs/s/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png',
                }}
                style={styles.backGroundImage}></ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Regular label={'shipping container'} />
          <Regular
            numberOfLines={2}
            fontSize={mvs(10)}
            label={
              'The 20ft dry container is ideal for moving smaller shipments of dry goods.'
            }
          />
          <Row style={{marginTop: mvs(5)}}>
            <Regular label={'$120.000'} />
            <TouchableOpacity>
              <Delete />
            </TouchableOpacity>
          </Row>
        </View>
        <View style={{alignItems: 'center', marginTop: mvs(10)}}>
          <PrimaryButton
            disabled={count == '1'}
            onPress={() => setCount(count - 1)}
            textStyle={{color: colors.primary, fontSize: mvs(16)}}
            containerStyle={styles.subQuantity}
            title={'-'}
          />
          <View style={{width: mvs(60), alignItems: 'center'}}>
            <Regular label={count} />
          </View>
          <PrimaryButton
            onPress={() => setCount(count + 1)}
            textStyle={{color: colors.primary, fontSize: mvs(16)}}
            containerStyle={styles.subQuantity}
            title={'+'}
          />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(CartCard);
