import {useTheme} from '@react-navigation/native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import WishlistCard from 'components/molecules/wishlist-card';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, View} from 'react-native';
import {getWishlist} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';
import styles from './styles';
import {Loader} from 'components/atoms/loader';

const MyWishList = props => {
  const colors = useTheme().colors;
  const [wishlist, setWishlist] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const res = await getWishlist();
      setWishlist(res);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchWishlist();
  }, []);
  const data = [{id: 1}];

  const featuredProduct = ({item}) => (
    <WishlistCard
      item={item}
      onPress={() => navigate('ProductDetials', {productId: item?.product?.id})}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('my_wishlist')} />
      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={wishlist?.data}
          renderItem={featuredProduct}
          contentContainerStyle={{paddingBottom: mvs(20)}}
        />
      )}
    </View>
  );
};
export default MyWishList;
