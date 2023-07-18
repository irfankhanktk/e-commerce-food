import {DeliveryBike, DeliveryBoy, RideCar} from 'assets/icons';
import SearchHeader from 'components/atoms/headers/search-header';
import {Row} from 'components/atoms/row';
import HomeCard from 'components/molecules/home-card';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {getCategories, getShops} from 'services/api/api-actions';
import {UTILS} from 'utils';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {Loader} from 'components/atoms/loader';

const HomeTab = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [loading, setLoading] = useState(false);
  const [screenLoading, setScreenLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(0);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchList, setSearchList] = React.useState([]);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res);
      setSelectedId(res?.data[0]?.id);
    } catch (error) {
      UTILS.returnError(error);
    }
  };
  const getShopsByCatId = async id => {
    try {
      if (!id) return;
      setLoading(true);
      const shop = await getShops(id);
      setShops(shop);
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
      getShopsByCatId(selectedId);
    }
  }, [selectedId]);
  const handleItemPress = item => {
    setSelectedId(item?.id);
  };
  React.useEffect(() => {
    if (searchTerm?.trim()?.length) {
      const filterd = shops?.data?.filter(item => {
        const cond =
          searchTerm === '' || item?.name.match(new RegExp(searchTerm, 'i'));
        if (cond) return item;
      });
      setSearchList(filterd);
    }
  }, [searchTerm]);

  const renderShop = ({item}) => (
    <HomeCard
      item={item}
      loading={loading}
      // props?.navigation?.navigate(item?.screen, {title: t(item?.title)})
      onPress={() => navigate('MainDetails', {id: item?.id})}
    />
  );
  return (
    <View style={styles.container}>
      <SearchHeader
        placeholder={'Search for restaurants'}
        title={'New York City'}
        back={true}
        isSearch={true}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {screenLoading ? (
        <Loader />
      ) : (
        <CustomFlatList
          loading={screenLoading}
          refreshControl={
            <RefreshControl
              onRefresh={() => getShopsByCatId(selectedId)}
              refreshing={loading}
            />
          }
          ListHeaderComponent={
            <View>
              <Row>
                <View style={styles.icons}>
                  <RideCar />
                  <Bold label={'Ride'} />
                </View>
                <View style={styles.icons}>
                  <DeliveryBike />
                  <Bold label={'Delivery'} />
                </View>
                <View style={styles.icons}>
                  <DeliveryBoy />
                  <Bold label={'Pick up'} />
                </View>
              </Row>
              <View>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  style={{marginTop: mvs(20)}}
                  horizontal={true}>
                  {categories?.data?.map((item, index) => (
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
              </View>
            </View>
          }
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          // columnWrapperStyle={styles.columnWrapperStyle}

          data={searchTerm?.trim()?.length ? searchList : shops?.data}
          renderItem={renderShop}
        />
      )}
    </View>
  );
};
export default HomeTab;
