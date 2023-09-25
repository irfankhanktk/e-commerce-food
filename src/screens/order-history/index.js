import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import OrderHistoryCard from 'components/molecules/order-history-card';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {ClanderTwo, DeliveryTwo} from 'assets/icons';
import Entypo from 'react-native-vector-icons/Entypo';
import {UTILS} from 'utils';
import {getOrderList} from 'services/api/auth-api-actions';
import {Loader} from 'components/atoms/loader';
import {I18nManager} from 'react-native';
import Medium from 'typography/medium-text';

const OrderHistory = props => {
  const colors = useTheme().colors;
  const isFocus = useIsFocused();
  const [loading, setLoading] = React.useState(true);
  const [select, setSelect] = React.useState(true);
  const [selectByPayment, setSelectByPayment] = React.useState('');
  const [selectByDelivery, setSelectByDelivery] = React.useState('');
  const [deliverySelect, setDeliverySelect] = React.useState(true);
  const [pageLoading, setPageLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);

  const [data, setData] = React.useState([]);

  const toggleOptions = () => {
    setSelect(!select);
  };
  const deliveryOptions = () => {
    setDeliverySelect(!deliverySelect);
  };

  const fetchData = async setDataLoading => {
    try {
      setLoading(true);
      setDataLoading(true);
      const res = await getOrderList(
        selectByPayment?.toLowerCase(),
        selectByDelivery?.toLowerCase(),
        pageNumber,
      );

      setData(preProducts =>
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
      setLoading(false);
    }
  };
  const handleLoadMore = () => {
    const lastPage = Math.ceil((data?.meta?.total || 0) / data?.meta?.per_page);
    if (!pageLoading && pageNumber < lastPage) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  React.useEffect(() => {
    if (pageNumber > 0 && !pageLoading) {
      fetchData(setPageLoading);
    }
  }, [pageNumber, selectByDelivery, selectByPayment, isFocus]);

  const renderOrders = ({item, index}) => (
    <OrderHistoryCard
      item={item}
      onPress={() =>
        navigate('OrderDetails', {
          order: item,
          status:
            item?.delivery_status === 'pending'
              ? '0'
              : item?.delivery_status === 'picked_up'
              ? '2'
              : item?.delivery_status === 'confirmed'
              ? '1'
              : item?.delivery_status === 'on_the_way'
              ? '3'
              : item?.delivery_status === 'delivered'
              ? '4'
              : null,
        })
      }
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      {/* <AppHeader back title={t('order_history')} /> */}
      <View style={{...styles.header, backgroundColor: colors.background}}>
        <Row style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigate('Me')}>
            <FontAwesome5
              name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
              size={mvs(20)}
              color={colors.iconColor}
            />
          </TouchableOpacity>

          <Medium
            color={colors.iconColor}
            fontSize={mvs(20)}
            label={t('order_history')}
          />

          <View />
        </Row>
      </View>

      <Row style={{paddingHorizontal: mvs(20)}}>
        <Row style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => toggleOptions()}
            style={[styles.selectButton]}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular
                color={colors.text}
                fontSize={mvs(12)}
                label={selectByPayment === '' ? t('All') : t(selectByPayment)}
              />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.text}
                style={{transform: [{rotate: select ? '0deg' : '90deg'}]}}
              />
            </Row>
          </TouchableOpacity>
          <View style={{marginLeft: mvs(10)}}>
            <ClanderTwo />
          </View>

          {!select ? (
            <View
              style={{
                ...styles.dotContainer,
                backgroundColor: colors.downColor,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('');
                  setSelect(!select);
                }}>
                <Regular
                  fontSize={mvs(12)}
                  color={colors.text}
                  label={t('all')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('Today');
                  setSelect(!select);
                }}>
                <Regular
                  fontSize={mvs(12)}
                  style={{color: colors.text, marginTop: mvs(10)}}
                  label={t('Today')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('This-Week');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('This_Week')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('This-Month');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('This_Month')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>

        <Row style={styles.innerContainer}>
          <View style={{marginRight: mvs(10)}}>
            <DeliveryTwo />
          </View>
          <TouchableOpacity
            onPress={() => deliveryOptions()}
            style={styles.selectButton}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular
                color={colors.text}
                fontSize={mvs(12)}
                label={selectByDelivery === '' ? t('All') : t(selectByDelivery)}
              />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.text}
                style={{
                  transform: [{rotate: deliverySelect ? '0deg' : '90deg'}],
                }}
              />
            </Row>
          </TouchableOpacity>
          {!deliverySelect ? (
            <View
              style={{
                ...styles.deliverdContainer,
                backgroundColor: colors.downColor,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('ALL');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular color={colors.text} label={t('all')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('COD');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  label={t('COD')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('NON-COD');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.text, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('NON_COD')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>
      </Row>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomFlatList
            showsVerticalScrollIndicator={false}
            data={data?.data}
            renderItem={renderOrders}
            onEndReached={handleLoadMore} // Load more when reaching the end of the list
            onEndReachedThreshold={0.5} // Load more when the user reaches the last 50% of the list
            ListFooterComponent={pageLoading && <Loader />}
            contentContainerStyle={{
              paddingBottom: mvs(20),
              paddingHorizontal: mvs(20),
            }}
          />
        </>
      )}
    </View>
  );
};
export default OrderHistory;
