import {useTheme} from '@react-navigation/native';
import {CartWhite, Carttt, Heart, HeartFill, MessageTwo} from 'assets/icons';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import DescriptionCard from 'components/atoms/description-card';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import Stars from 'components/atoms/stars';
import AllFeaturedCategoriesCard from 'components/molecules/all-featured-categories-card';
import FeaturedCategoriesCard from 'components/molecules/featured-categories-card';
import ProductDetailButtonCard from 'components/molecules/product-detail-button-card';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {getProductDetails} from 'services/api/auth-api-actions';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import styles from './styles';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {addUserWishlist, removeUserWishlist} from 'services/api/api-actions';

const ProductDetials = props => {
  const colors = useTheme().colors;
  const {wishlists} = useAppSelector(s => s?.wishlist);
  const dispatch = useAppDispatch();
  const productId = props?.route?.params?.productId;
  console.log('wishlists:::', wishlists);
  const {t} = i18n;
  const [data, setData] = React.useState('');

  const featuredCategories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
  ];

  const renderTopProducts = ({item}) => (
    <AllFeaturedCategoriesCard
      item={item}
      // onPress={() => navigate('CategoriesTab')}
    />
  );
  const renderLikeProduct = ({item}) => (
    <FeaturedCategoriesCard
      item={item}
      onPress={() => navigate('FeaturedCategories')}
    />
  );
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
  const bool = wishlists?.some(x => x === data?.id);
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('Product details')} icon />

      <CustomFlatList
        ListHeaderComponent={
          <View>
            <View style={styles.bigImageContainer}>
              <Image
                source={{uri: selectImage}}
                style={{height: '100%', width: '100%', borderRadius: mvs(15)}}
              />
            </View>
            <View>
              <ScrollView horizontal>
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
              </ScrollView>
            </View>
            <Regular
              color={colors.text}
              style={styles.productName}
              label={data?.name}
            />
            <Row style={styles.reviewContainer}>
              <Stars />
              <Regular style={styles.reviewsText} label={'(0 reviews)'} />
            </Row>
            <Row style={{alignItems: 'center'}}>
              <Regular style={styles.inquiryText} label={'Product Inquiry'} />
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    bool
                      ? removeUserWishlist(data?.id)
                      : addUserWishlist(data?.id),
                  );
                }}>
                {bool ? <HeartFill /> : <Heart />}
              </TouchableOpacity>
            </Row>
            <Row style={{justifyContent: 'flex-start'}}>
              <Regular
                color={colors.text}
                label={'Brand'}
                style={styles.brand}
              />
              <Regular label={'Calvin Klein'} style={styles.brandName} />
            </Row>
            <Row style={styles.messageMainContainer}>
              <Regular
                style={{color: colors.text, fontSize: mvs(12)}}
                label={t('inhouse_product')}
              />
              <IconButton
                onPress={() => navigate('InboxMessage')}
                containerStyle={styles.messageContainer}
                textStyle={styles.messageTextStyle}
                Icon={<MessageTwo />}
                title={t('message_seller')}
              />
            </Row>
            <Row style={{marginTop: mvs(25)}}>
              <Regular label={t('quantity')} style={{color: colors.text}} />
              <Row style={{alignItems: 'center'}}>
                <PrimaryButton
                  disabled={count == '1'}
                  onPress={() => setCount(count - 1)}
                  textStyle={{color: colors.text, fontSize: mvs(16)}}
                  containerStyle={styles.subQuantity}
                  title={'-'}
                />
                <View style={{width: mvs(60), alignItems: 'center'}}>
                  <Regular color={colors.text} label={count} />
                </View>
                <PrimaryButton
                  onPress={() => setCount(count + 1)}
                  textStyle={{color: colors.text, fontSize: mvs(16)}}
                  containerStyle={styles.subQuantity}
                  title={'+'}
                />
              </Row>
            </Row>
            <Regular
              color={colors.text}
              style={{marginTop: mvs(25)}}
              label={t('description')}
            />
            <DescriptionCard description={data?.meta_description} />
            <ProductDetailButtonCard label={t('video')} />
            <ProductDetailButtonCard label={t('reviews')} />
            <ProductDetailButtonCard label={t('vendor_policy')} />
            <ProductDetailButtonCard label={t('policy')} />
            <ProductDetailButtonCard label={t('support_policy')} />
            <Medium
              style={{marginTop: mvs(10)}}
              color={colors.text}
              label={t('product_you_may_also_like')}
            />
            <CustomFlatList
              horizontal={true}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingVertical: mvs(10)}}
              data={featuredCategories}
              renderItem={renderLikeProduct}
            />
            <Medium color={colors.text} label={t('top_selling_products')} />
          </View>
        }
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={renderTopProducts}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />

      <Row style={{paddingHorizontal: mvs(20), paddingVertical: mvs(10)}}>
        <IconButton
          onPress={() =>
            props?.navigation?.replace('Drawer', {initialRoute: 'Cart'})
          }
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
    </View>
  );
};
export default ProductDetials;
