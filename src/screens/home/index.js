import {
  Brands,
  Coupons,
  FlashDeals,
  TopCategories,
  TopVendors,
} from 'assets/icons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import HomeHeader from 'components/atoms/headers/home-header';
import {Row} from 'components/atoms/row';
import SwiperCard from 'components/atoms/swiper';
import FeaturedCategoriesCard from 'components/molecules/featured-categories-card';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';

const HomeTab = props => {
  const featuredCategories = [
    {
      id: 1,
      name: 'ali',
    },
    {
      id: 2,
      name: 'ali',
    },
    {
      id: 3,
      name: 'ali',
    },
  ];

  const renderShop = ({item}) => (
    <FeaturedCategoriesCard
      item={item}
      onPress={() => navigate('FeaturedCategories')}
    />
  );
  const featuredProduct = ({item}) => (
    <FeaturedProductsCard
      item={item}
      onPress={() => navigate('ProductDetials')}
    />
  );

  return (
    <View style={styles.container}>
      <HomeHeader back isSearch notification />

      <CustomFlatList
        ListHeaderComponent={
          <View>
            <SwiperCard />
            <Row style={{marginTop: mvs(25), paddingHorizontal: mvs(20)}}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <TopCategories />
                </View>
                <Regular label={'Top Categories'} fontSize={mvs(10)} />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <Brands />
                </View>
                <Regular label={'Brands'} fontSize={mvs(10)} />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <TopVendors />
                </View>
                <Regular label={'Top Vendors'} fontSize={mvs(10)} />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <FlashDeals />
                </View>
                <Regular label={'Flash Deals'} fontSize={mvs(10)} />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View style={styles.itemsContainer}>
                  <Coupons />
                </View>
                <Regular label={'Coupons'} fontSize={mvs(10)} />
              </TouchableOpacity>
            </Row>
            <View style={styles.featuredContainer}>
              <Medium
                style={{
                  marginTop: mvs(5),
                  marginBottom: mvs(10),
                  marginLeft: mvs(10),
                }}
                color={colors.white}
                label={'Featured Categories'}
              />

              <CustomFlatList
                horizontal={true}
                showsVerticalScrollIndicator={false}
                // columnWrapperStyle={styles.columnWrapperStyle}
                data={featuredCategories}
                renderItem={renderShop}
              />
            </View>
            <Medium
              style={{marginLeft: mvs(20), marginTop: mvs(10)}}
              label={'Featured Products'}
            />
          </View>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{paddingBottom: mvs(20)}}
      />
    </View>
  );
};
export default HomeTab;
