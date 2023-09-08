import CustomFlatList from 'components/atoms/custom-flatlist';

import {useTheme} from '@react-navigation/native';
import AppHeader from 'components/atoms/headers/app-header';
import {Loader} from 'components/atoms/loader';
import AllProductsCard from 'components/molecules/all-products-card';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import {getAllProductCategoryPaginated} from 'services/api/auth-api-actions';
import styles from './styles';

const FeaturedCategories = props => {
  const colors = useTheme().colors;

  const route = props?.route?.params?.item;
  const [loading, setLoading] = React.useState(true);
  const [pageLoading, setPageLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [allProducts, setAllProducts] = React.useState([]);

  const fetchProducts = async setDataLoading => {
    try {
      setDataLoading(true);
      const res = await getAllProductCategoryPaginated(route?.id, pageNumber);
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
    if (pageNumber > 0 && !pageLoading) {
      fetchProducts(setPageLoading);
    }
  }, [pageNumber]);
  React.useEffect(() => {
    fetchProducts(setLoading);
  }, []);

  const renderProduct = ({item}) => (
    <AllProductsCard
      item={item}
      // onPress={() => navigate('CategoriesTab')}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={route?.name} />
      {/* <Medium
        label={'Featured Categories'}
        style={{
          marginLeft: mvs(20),
          marginTop: mvs(20),
          color: colors.darkBlack,
        }}
      /> */}
      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={allProducts?.data || []}
          renderItem={renderProduct}
          onEndReached={handleLoadMore} // Load more when reaching the end of the list
          onEndReachedThreshold={0.5} // Load more when the user reaches the last 50% of the list
          contentContainerStyle={{paddingBottom: mvs(20)}}
          ListFooterComponent={pageLoading && <Loader />}
        />
      )}
    </View>
  );
};
export default FeaturedCategories;
