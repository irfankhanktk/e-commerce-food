import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import AllCategoriesCard from 'components/molecules/all-categories-card';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import {getAllFeaturedCategories} from 'services/api/auth-api-actions';
import styles from './styles';
import {Loader} from 'components/atoms/loader';

const AllFeaturedCategories = props => {
  const [data, setData] = React.useState([]);
  const fetchCategories = async () => {
    const res = await getAllFeaturedCategories();
    setData(res);
  };
  React.useEffect(() => {
    fetchCategories();
  }, []);

  const featuredProduct = ({item}) => (
    <AllCategoriesCard item={item} onPress={() => navigate('ProductDetials')} />
  );

  return (
    <View style={styles.container}>
      <AppHeader back title={'All Featured Categories'} />

      <CustomFlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={data?.data}
        renderItem={featuredProduct}
        contentContainerStyle={{paddingBottom: mvs(20)}}
        // ListFooterComponent={<Loader />}
      />
    </View>
  );
};
export default AllFeaturedCategories;
