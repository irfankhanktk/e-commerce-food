import {useTheme} from '@react-navigation/native';
import {Brands, FlashDeals, TopCategories, TopVendors} from 'assets/icons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import HomeHeader from 'components/atoms/headers/home-header';
import {Loader} from 'components/atoms/loader';
import {Row} from 'components/atoms/row';
import SwiperCard from 'components/atoms/swiper';
import AllProductsCard from 'components/molecules/all-products-card';
import FeaturedCategoriesCard from 'components/molecules/featured-categories-card';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {getAddressess} from 'services/api/address-api-actions';
import {getSearchProducts, getWishlist} from 'services/api/api-actions';
import {
  banners,
  getAllFeaturedProducts,
  getAllProducts,
  getFeaturedCategories,
} from 'services/api/auth-api-actions';
import {getCartList} from 'services/api/cart-api-actions';
import {getTopSellingProducts} from 'services/api/product-api-actions';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import styles from './styles';

const HomeTab = props => {
  const colors = useTheme().colors;
  const dispatch = useAppDispatch();
  const [banner, setBanner] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [featuredCategorie, setFeaturedCategorie] = React.useState([]);
  const [allFeaturedProducts, setAllFeaturedProducts] = React.useState([]);
  const [pageLoading, setPageLoading] = React.useState(false);
  const [cartLoading, setCartLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [allProducts, setAllProducts] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const getBanners = async () => {
    try {
      const res = await banners();
      setBanner(res);
      const resCategories = await getFeaturedCategories();
      setFeaturedCategorie(resCategories);
      const resAllFeaturedProducts = await getAllFeaturedProducts();
      setAllFeaturedProducts(resAllFeaturedProducts);
    } catch (error) {
      console.log('Error get Banners====>', UTILS.returnError(error));
    }
  };
  const fetchProducts = async setDataLoading => {
    try {
      setDataLoading(true);
      let res = {
        data: [],
      };
      if (searchTerm?.trim()) {
        res = await getSearchProducts({
          name: searchTerm,
          page: pageNumber,
        });
      } else {
        res = await getAllProducts(pageNumber);
      }
      setAllProducts(preProducts =>
        pageNumber > 1
          ? {
              ...res,
              data: preProducts?.data
                ? [...preProducts?.data, ...res?.data]
                : [...res?.data],
            }
          : res,
      );
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setDataLoading(false);
    }
  };
  const handleLoadMore = () => {
    const lastPage = Math.ceil(
      (allProducts?.meta?.total || 0) / allProducts?.meta?.per_page,
    );
    if (!pageLoading && pageNumber < lastPage) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  React.useEffect(() => {
    getBanners();
    dispatch(getWishlist());
    dispatch(getCartList());
    dispatch(getTopSellingProducts());
    dispatch(getAddressess());
  }, []);
  React.useEffect(() => {
    if (!pageLoading) {
      fetchProducts(pageNumber > 1 ? setPageLoading : setLoading);
    }
  }, [pageNumber, searchTerm]);

  const renderShop = ({item}) => (
    <FeaturedCategoriesCard
      item={item}
      onPress={() => navigate('FeaturedCategories', {item: item})}
    />
  );
  const featuredProduct = ({item}) => (
    <FeaturedProductsCard
      item={item}
      onPress={() => navigate('ProductDetials', {productId: item?.id})}
    />
  );
  const renderProduct = ({item}) => (
    <AllProductsCard
      setCartLoading={setCartLoading}
      loading={cartLoading === item?.id}
      item={item}
      onPress={() => navigate('ProductDetials', {productId: item?.id})}
      onAddCart={() => navigate('Cart')}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <HomeHeader
        menu
        isSearch
        notification
        value={searchTerm}
        onChangeText={txt => {
          setPageNumber(1);
          setSearchTerm(txt);
        }}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomFlatList
            ListHeaderComponent={
              !searchTerm?.trim() && (
                <View>
                  <SwiperCard data={banner?.data} />
                  <Row style={{marginTop: mvs(25), paddingHorizontal: mvs(20)}}>
                    <TouchableOpacity
                      onPress={() =>
                        props?.navigation?.replace('Drawer', {
                          initialRoute: 'Categories',
                        })
                      }
                      style={{alignItems: 'center'}}>
                      <View
                        style={{
                          ...styles.itemsContainer,
                          backgroundColor: colors.skyBlue,
                          borderRadius: mvs(100),
                        }}>
                        <TopCategories />
                      </View>
                      <Regular
                        color={colors.text}
                        label={t('top_category')}
                        fontSize={mvs(10)}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigate('Brands')}
                      style={{alignItems: 'center'}}>
                      <View
                        style={{
                          ...styles.itemsContainer,
                          backgroundColor: colors.skyBlue,
                        }}>
                        <Brands />
                      </View>
                      <Regular
                        color={colors.text}
                        label={t('brands')}
                        fontSize={mvs(10)}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigate('BrowseAllVenders')}
                      style={{alignItems: 'center'}}>
                      <View
                        style={{
                          ...styles.itemsContainer,
                          backgroundColor: colors.skyBlue,
                          borderRadius: mvs(100),
                        }}>
                        <TopVendors />
                      </View>
                      <Regular
                        color={colors.text}
                        label={t('top_vendors')}
                        fontSize={mvs(10)}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigate('FeaturedCategories')}
                      style={{alignItems: 'center'}}>
                      <View
                        style={{
                          ...styles.itemsContainer,
                          backgroundColor: colors.skyBlue,
                          borderRadius: mvs(100),
                        }}>
                        <FlashDeals />
                      </View>
                      <Regular
                        color={colors.text}
                        label={t('flash_deals')}
                        fontSize={mvs(10)}
                      />
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{alignItems: 'center'}}>
                      <View
                        style={{
                          ...styles.itemsContainer,
                          backgroundColor: colors.skyBlue,
                          borderRadius: mvs(100),
                        }}>
                        <Coupons />
                      </View>
                      <Regular
                        color={colors.text}
                        label={t('coupons')}
                        fontSize={mvs(10)}
                      />
                    </TouchableOpacity> */}
                  </Row>
                  <View
                    style={{
                      ...styles.featuredContainer,
                      backgroundColor: colors.primary,
                    }}>
                    <Row
                      style={{
                        marginTop: mvs(5),
                        marginBottom: mvs(10),
                        alignItems: 'center',
                        paddingHorizontal: mvs(10),
                      }}>
                      <Medium
                        color={colors.white}
                        label={t('featured_categories')}
                      />
                      <TouchableOpacity
                        onPress={() => navigate('AllFeaturedCategories')}>
                        <Regular color={colors.white} label={t('see_all')} />
                      </TouchableOpacity>
                    </Row>

                    <CustomFlatList
                      horizontal={true}
                      showsVerticalScrollIndicator={false}
                      // columnWrapperStyle={styles.columnWrapperStyle}
                      data={featuredCategorie?.data}
                      renderItem={renderShop}
                    />
                  </View>

                  <View
                    style={{
                      ...styles.featuredContainer,
                      backgroundColor: colors.primary,
                    }}>
                    <Medium
                      style={{
                        marginTop: mvs(5),
                        marginBottom: mvs(10),
                        marginLeft: mvs(10),
                      }}
                      color={colors.white}
                      label={t('featured_products')}
                    />
                    <CustomFlatList
                      horizontal={true}
                      showsVerticalScrollIndicator={false}
                      // columnWrapperStyle={styles.columnWrapperStyle}
                      data={allFeaturedProducts?.data}
                      renderItem={featuredProduct}
                    />
                  </View>
                  <Medium
                    color={colors.text}
                    style={{paddingHorizontal: mvs(20), marginTop: mvs(10)}}
                    label={t('all_product')}
                  />
                </View>
              )
            }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={styles.columnWrapperStyle}
            data={allProducts?.data || []}
            renderItem={renderProduct}
            onEndReached={handleLoadMore} // Load more when reaching the end of the list
            onEndReachedThreshold={0.5} // Load more when the user reaches the last 50% of the list
            contentContainerStyle={{paddingBottom: mvs(20)}}
            ListFooterComponent={pageLoading && <Loader />}
            loading={loading}
          />
        </>
      )}
    </View>
  );
};
export default HomeTab;
