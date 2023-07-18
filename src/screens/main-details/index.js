import {Shoppingcart} from 'assets/icons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {Row} from 'components/atoms/row';
import DetailsSwiperCard from 'components/atoms/swiper/details-swiper';
import DetailFoodCard from 'components/molecules/detail-food-card';
import PopularFoodCard from 'components/molecules/popular-food-card';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import Regular from 'typography/regular-text';
import MyRanking from './../../components/atoms/stars-ranking/index';
import styles from './styles';
import ItemSelectModal from 'components/molecules/modals/item-select-modal';
import {navigate} from 'navigation/navigation-ref';
import {
  getProductsByCategoryId,
  getShopDetails,
  getShopDetailsCategories,
  getShopPopularProducts,
} from 'services/api/api-actions';
import {UTILS} from 'utils';
import {Loader} from 'components/atoms/loader';
import {RefreshControl} from 'react-native';
const MainDetails = props => {
  const {route} = props;
  const {id} = route?.params || {};
  const {user, cart} = useAppSelector(s => s);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screenLoading, setScreenLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(0);
  const [details, setDetails] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const res = await Promise.all([
        getShopDetails(1),
        getShopPopularProducts(1),
        getShopDetailsCategories(1),
      ]);
      setDetails({
        shop: res[0]?.data || {},
        popularProducts: res[1]?.data || [],
        categories: res[2]?.data || [],
      });
      setSelectedId(res[2]?.data[0]?.id);
    } catch (error) {
      UTILS.returnError(error);
    }
  };
  const getProductsByCatId = async id => {
    try {
      if (!id) return;
      setLoading(true);
      const res = await getProductsByCategoryId(id);
      setProducts(res?.data);
      // console.log('All shops check=======>', shop);
    } catch (error) {
      UTILS.returnError(error);
    } finally {
      setLoading(false);
      setScreenLoading(false);
    }
  };
  React.useEffect(() => {
    if (selectedId) {
      getProductsByCatId(selectedId);
    }
  }, [selectedId]);
  const handleItemPress = item => {
    setSelectedId(item?.id);
  };
  const renderPopularItem = ({item}) => (
    <PopularFoodCard item={item} onPress={() => setSelectedProduct(true)} />
  );
  const renderDetailItem = ({item}) => (
    <DetailFoodCard item={item} onPress={() => setSelectedProduct(true)} />
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerView}>
        <TouchableOpacity onPress={() => navigate('Cart')}>
          <Shoppingcart />
          <View style={styles.cartNumberView}>
            <Bold
              fontSize={12}
              color={'white'}
              label={cart?.cart?.length || '0'}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>

      {screenLoading ? (
        <Loader />
      ) : (
        <CustomFlatList
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={() => getProductsByCatId(selectedId)}
              refreshing={loading}
            />
          }
          contentContainerStyle={{paddingHorizontal: mvs(20)}}
          ListHeaderComponent={
            <View>
              <DetailsSwiperCard data={[details?.shop?.image || 0]} />
              <Row style={{alignItems: 'center', marginTop: mvs(15)}}>
                <Bold fontSize={mvs(18)} label={details?.shop?.name || ''} />
                <MyRanking starSize={mvs(15)} />
              </Row>
              <View style={styles.content}>
                <Light
                  fontSize={mvs(10)}
                  numberOfLines={2}
                  label={
                    'here should be description of restaurant or shop'
                    // 'This restaurant serves the most tasty veggie soup and favour of himmal spices….'
                  }
                />
              </View>
              <Bold
                style={{marginTop: mvs(25), paddingBottom: mvs(10)}}
                fontSize={mvs(18)}
                label={'Popular'}
              />
              <CustomFlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={details?.popularProducts || []}
                renderItem={renderPopularItem}
              />
              <Row style={{alignItems: 'center'}}>
                <AntDesign
                  style={{marginTop: mvs(10), marginRight: mvs(15)}}
                  name="search1"
                  size={30}
                  color={'#9D9D9D'}
                />
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  style={{marginTop: mvs(20)}}
                  horizontal={true}>
                  {details?.categories?.map((item, index) => (
                    <TouchableOpacity
                      style={[
                        styles.itemContainer,
                        selectedId === item?.id && styles.selectedItem,
                      ]}
                      onPress={() => handleItemPress(item)}
                      key={index}>
                      <Regular
                        style={[
                          styles.itemText,
                          selectedId === item?.id && styles.selectedItemText,
                        ]}
                        label={item?.title}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </Row>
            </View>
          }
          data={products}
          numColumns={2}
          renderItem={renderDetailItem}
        />
      )}
      <ItemSelectModal
        onPressBookRide={() => {
          setSelectedProduct(false);
          navigate('LocationBooking');
        }}
        onPressAddCart={() => {
          setSelectedProduct(false);
          navigate('OrderScreen');
        }}
        visible={selectedProduct}
        onClose={setSelectedProduct}
      />
    </View>
  );
};
export default MainDetails;
