import {CartWhite, Carttt, MessageTwo} from 'assets/icons';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import DescriptionCard from 'components/atoms/description-card';
import AppHeader from 'components/atoms/headers/app-header';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {Row} from 'components/atoms/row';
import Stars from 'components/atoms/stars';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import i18n from 'translation';
import Regular from 'typography/regular-text';
import styles from './styles';
import {getProductDetails} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';

const ProductDetials = props => {
  const productId = props?.route?.params?.productId;
  const {t} = i18n;
  const [data, setData] = React.useState('');
  console.log('data check=========>', data);
  const fetchProduct = async () => {
    try {
      const res = await getProductDetails(productId);
      setData(res);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    }
  };
  React.useEffect(() => {
    fetchProduct();
  }, []);

  const imageSlide = [
    {
      id: 1,
      image:
        'https://img.lovepik.com/free-png/20220126/lovepik-skin-care-products-png-image_401871906_wh1200.png',
    },
    {
      id: 2,
      image:
        'https://png.pngitem.com/pimgs/s/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png',
    },
    {
      id: 3,
      image:
        'https://png.pngtree.com/png-clipart/20200206/ourmid/pngtree-three-dimensional-elements-of-honey-skin-care-products-png-image_2133185.jpg',
    },
  ];
  const [selectImage, setSelectImage] = React.useState(imageSlide[0]?.image);
  const [count, setCount] = React.useState(1);
  return (
    <View style={styles.container}>
      <AppHeader back title={t('order')} icon />
      <KeyboardAvoidScrollview contentContainerStyle={{paddingBottom: mvs(10)}}>
        <Row style={{justifyContent: 'flex-start'}}>
          <View>
            {imageSlide?.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelectImage(item.image)}
                style={styles.smallImageContainer}>
                <Image
                  source={{uri: item?.image}}
                  style={{width: mvs(44), height: mvs(44)}}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.bigImageContainer}>
            <Image
              source={{uri: selectImage}}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Row>
        <Regular style={styles.productName} label={data?.name} />
        <Row style={styles.reviewContainer}>
          <Stars />
          <Regular style={styles.reviewsText} label={'(0 reviews)'} />
        </Row>
        <Regular style={styles.inquiryText} label={'Product Inquiry'} />
        <Row style={{justifyContent: 'flex-start'}}>
          <Regular label={'Brand'} style={styles.brand} />
          <Regular label={'Calvin Klein'} style={styles.brandName} />
        </Row>
        <Row style={styles.messageMainContainer}>
          <Regular
            style={{color: colors.darkBlack, fontSize: mvs(12)}}
            label={t('inhouse_product')}
          />
          <IconButton
            containerStyle={styles.messageContainer}
            textStyle={styles.messageTextStyle}
            Icon={<MessageTwo />}
            title={t('message_seller')}
          />
        </Row>
        <Row style={{marginTop: mvs(25)}}>
          <Regular label={t('quantity')} style={{color: colors.darkBlack}} />
          <Row style={{alignItems: 'center'}}>
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
          </Row>
        </Row>
        <Regular style={{marginTop: mvs(25)}} label={t('description')} />
        <DescriptionCard description={data?.meta_description} />
        <Row>
          <IconButton
            Icon={<CartWhite />}
            title={t('add_to_cart')}
            containerStyle={{width: '48%'}}
            textStyle={{marginLeft: mvs(20)}}
          />
          <IconButton
            Icon={<Carttt />}
            containerStyle={styles.buynowBtn}
            title={t('buy_now')}
            textStyle={{color: colors.primary, marginLeft: mvs(20)}}
          />
        </Row>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default ProductDetials;
