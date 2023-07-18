import SearchHeader from 'components/atoms/headers/search-header';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';

import CustomFlatList from 'components/atoms/custom-flatlist';
import {Row} from 'components/atoms/row';
import DiscoveryCuisinesCard from 'components/molecules/discovery-cuisines-card';
import DiscoveryTrendingCard from 'components/molecules/discovery-trending-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import styles from './styles';
import LegendaryFoodCard from 'components/molecules/lengerdary-food-card';
import DiscoveryPopularRestaurantsCard from 'components/molecules/discovery-popular-restaurants-card';
import DiscoveryCollectionCard from 'components/molecules/discovery-collection-card';
import {navigate} from 'navigation/navigation-ref';
import {getPopularShops, getTrendingShops} from 'services/api/api-actions';

const DiscoveryTab = props => {
  const {user} = useAppSelector(s => s);
  const {userInfo, wishlist} = user;
  const dispatch = useAppDispatch();
  const [trendingShop, setTrendingShop] = useState([]);
  const [popularShop, setPopularShop] = useState([]);
  // console.log('popular shop===>', popularShop);
  const {t} = i18n;

  const food = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  useEffect(() => {
    getTrendingShop();
  }, []);
  const getTrendingShop = async () => {
    const tending = await getTrendingShops();
    setTrendingShop(tending?.data);
    const popular = await getPopularShops();
    setPopularShop(popular?.data);
  };

  const renderTrendingShops = ({item}) => (
    <DiscoveryTrendingCard
      item={item}
      // props?.navigation?.navigate(item?.screen, {title: t(item?.title)})
      onPress={() => navigate('MainDetails', {id: item?.id})}
    />
  );
  const renderPopularRestaurants = ({item}) => (
    <DiscoveryPopularRestaurantsCard
      item={item}
      // props?.navigation?.navigate(item?.screen, {title: t(item?.title)})
      onPress={() => navigate('MainDetails', {id: item?.id})}
    />
  );
  const renderCuisinesItem = ({item}) => (
    <DiscoveryCuisinesCard
      item={item}
      // props?.navigation?.navigate(item?.screen, {title: t(item?.title)})
      onPress={() => navigate('OrderScreen')}
    />
  );
  const renderLengendaryItem = ({item}) => (
    <LegendaryFoodCard
      item={item}
      // props?.navigation?.navigate(item?.screen, {title: t(item?.title)})
      onPress={() => navigate('OrderScreen')}
    />
  );
  const renderCollectionItem = ({item}) => (
    <DiscoveryCollectionCard
      item={item}
      // props?.navigation?.navigate(item?.screen, {title: t(item?.title)})
      onPress={() => navigate('OrderScreen')}
    />
  );
  return (
    <View style={styles.container}>
      <SearchHeader
        placeholder={'Search for restaurants'}
        title={'New York City'}
        back={true}
        isSearch={true}
      />

      <KeyboardAvoidScrollview
        contentContainerStyle={{marginTop: mvs(10), paddingBottom: 50}}>
        <View style={styles.trendingMainContainer}>
          <Row style={{paddingHorizontal: mvs(10)}}>
            <Bold label={'Trending This Week'} />
            <Bold color={colors.primary} fontSize={mvs(12)} label={'See all'} />
          </Row>
          <CustomFlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            data={trendingShop}
            renderItem={renderTrendingShops}
          />
        </View>

        <View style={styles.trendingMainContainer}>
          <Row style={{paddingHorizontal: mvs(10)}}>
            <Bold label={'Cuisines'} />
            <Bold color={colors.primary} fontSize={mvs(12)} label={'See all'} />
          </Row>
          <CustomFlatList
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={food}
            renderItem={renderCuisinesItem}
          />
        </View>
        <View style={{marginTop: mvs(15)}}>
          <Row style={{paddingHorizontal: mvs(10)}}>
            <Bold label={'Legendary food'} />
            <Bold color={colors.primary} fontSize={mvs(12)} label={'See all'} />
          </Row>
          <CustomFlatList
            contentContainerStyle={styles.contentContainerStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={food}
            renderItem={renderLengendaryItem}
          />
        </View>
        <View style={styles.trendingMainContainer}>
          <Row style={{paddingHorizontal: mvs(10)}}>
            <Bold label={'Popular Restaurants'} />
          </Row>
          <CustomFlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.contentContainerStyle}
            data={popularShop}
            renderItem={renderPopularRestaurants}
          />
        </View>
        <View style={{marginTop: mvs(15)}}>
          <Row style={{paddingHorizontal: mvs(10)}}>
            <Bold label={'Collections'} />
            <Bold color={colors.primary} fontSize={mvs(12)} label={'See all'} />
          </Row>
          <CustomFlatList
            contentContainerStyle={styles.contentContainerStyle}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={wishlist || []}
            renderItem={renderCollectionItem}
          />
        </View>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default DiscoveryTab;
