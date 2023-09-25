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
import {
  getProductDetails,
  getProductSlides,
} from 'services/api/auth-api-actions';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import styles from './styles';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {addUserWishlist, removeUserWishlist} from 'services/api/api-actions';
import {Loader} from 'components/atoms/loader';
import {getRelatedProducts} from 'services/api/product-api-actions';
import {addToCartList, removeFromCartList} from 'services/api/cart-api-actions';
import {onCreateConveration} from 'services/api/chat-api-actions';

const ProductDetials = props => {
  const colors = useTheme().colors;

  const {wishlist, product, cart} = useAppSelector(s => s);
  const {cart_list} = cart;
  const {wishlists} = wishlist;
  const {top_selling_products} = product;
  const dispatch = useAppDispatch();
  const productId = props?.route?.params?.productId;
  const {t} = i18n;
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [cartLoading, setCartLoading] = React.useState(false);
  const [relatedProducts, setRelatedProducts] = React.useState([]);
  const [selectImage, setSelectImage] = React.useState('');
  const [count, setCount] = React.useState(1);
  const [chatLoading, setChatLoading] = React.useState(false);
  const cartItem = cart_list?.find(
    x => x?.cart_items[0]?.product_id === productId,
  );
  const onMessageSellerPress = async () => {
    try {
      setChatLoading(true);
      const res = await onCreateConveration({
        product_id: productId,
        title: data?.productDetails?.name,
        message: 'I have a query about this product',
      });
      navigate('InboxMessage', {
        id: res?.conversation_id,
        shop: res,
      });
    } catch (error) {
    } finally {
      setChatLoading(false);
    }
  };
  // () => navigate('InboxMessage')
  const renderTopProducts = ({item}) => (
    <AllFeaturedCategoriesCard
      item={item}
      // onPress={() => navigate('CategoriesTab')}
    />
  );
  const renderLikeProduct = ({item}) => (
    <FeaturedCategoriesCard
      item={item}
      onPress={() =>
        props?.navigation?.push('ProductDetials', {productId: item?.id})
      }
    />
  );
  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await getProductDetails(productId);
      // const resp = await getProductSlides(productId);
      setData({
        ...res,
        productPhotos: [{path: res?.thumbnailsImage}, ...res?.productPhotos],
      });
      setSelectImage(res?.thumbnailsImage);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  const fetchRelatedProducts = () => {
    getRelatedProducts(productId)
      .then(res => {
        console.log('res:::', res);
        setRelatedProducts(res?.data || []);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  React.useEffect(() => {
    fetchRelatedProducts();
    fetchProduct();
  }, []);

  const bool = wishlists?.some(x => x === data?.productDetails?.id);
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('product_details')} icon />
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomFlatList
            ListHeaderComponent={
              <View>
                <View style={styles.bigImageContainer}>
                  <Image
                    source={{uri: selectImage}}
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: mvs(15),
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View>
                  <ScrollView horizontal>
                    {data?.productPhotos?.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setSelectImage(item.path)}
                        style={styles.smallImageContainer}>
                        <Image
                          source={{uri: item?.path}}
                          style={{width: mvs(44), height: mvs(44)}}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
                <Regular
                  color={colors.text}
                  style={styles.productName}
                  label={data?.productDetails?.name}
                />
                <Row style={styles.reviewContainer}>
                  <Stars />
                  <Regular style={styles.reviewsText} label={'(0 reviews)'} />
                </Row>
                <Row style={{alignItems: 'center'}}>
                  <Regular
                    style={styles.inquiryText}
                    label={'Product Inquiry'}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        bool
                          ? removeUserWishlist(data?.productDetails?.id)
                          : addUserWishlist(data?.productDetails?.id),
                      );
                    }}>
                    {bool ? <HeartFill /> : <Heart />}
                  </TouchableOpacity>
                </Row>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Regular
                    color={colors.text}
                    label={t('brand')}
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
                    loading={chatLoading}
                    onPress={onMessageSellerPress}
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
                {relatedProducts?.length ? (
                  <>
                    <Medium
                      style={{marginTop: mvs(10)}}
                      color={colors.text}
                      label={t('product_you_may_also_like')}
                    />
                    <CustomFlatList
                      horizontal={true}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{paddingVertical: mvs(10)}}
                      data={relatedProducts}
                      renderItem={renderLikeProduct}
                    />
                  </>
                ) : null}
                <Medium color={colors.text} label={t('top_selling_products')} />
              </View>
            }
            showsVerticalScrollIndicator={false}
            data={top_selling_products || []}
            renderItem={renderTopProducts}
            contentContainerStyle={{
              paddingBottom: mvs(20),
              paddingHorizontal: mvs(20),
            }}
          />
          <Row style={{paddingHorizontal: mvs(20), paddingVertical: mvs(10)}}>
            <IconButton
              loading={cartLoading}
              onPress={() => {
                dispatch(
                  cartItem
                    ? removeFromCartList(
                        cartItem?.cart_items[0]?.id,
                        setCartLoading,
                      )
                    : addToCartList(
                        {
                          id: productId,
                          variant: '',
                          quantity: 1,
                        },
                        setCartLoading,
                      ),
                );
                // props?.navigation?.replace('Drawer', {initialRoute: 'Cart'})
              }}
              Icon={<CartWhite />}
              title={t(!cartItem ? 'add_to_cart' : 'remove')}
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
        </>
      )}
    </View>
  );
};
export default ProductDetials;
