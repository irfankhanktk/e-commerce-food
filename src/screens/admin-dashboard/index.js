import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import React from 'react';
import {Alert, ScrollView, TouchableOpacity, View} from 'react-native';
import {BarChart, PieChart} from 'react-native-chart-kit';
import styles from './styles';

import Bold from 'typography/bold-text';
import {getStatus, logout} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';
import {resetStack} from 'navigation/navigation-ref';
import {Loader} from 'components/atoms/loader';
import {t} from 'i18next';

const AdminDashBoard = () => {
  const [status, setStatus] = React.useState({});

  const [loading, setLoading] = React.useState(true);
  const logOut = async () => {
    try {
      const res = await logout();
      console.log('res========>', res);
      Alert.alert(res?.message);
      await UTILS.clearStorage();
      resetStack('Login');
    } catch (error) {
      console.log('Error===>', UTILS.returnError(error));
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getStatus();
      console.log('admin dashboard status=======>', res);
      setStatus(res);
    } catch (error) {
      console.log('Error===>', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const data = {
    labels: ['Cellphones & tabs', 'Automobile', 'Women clothing'],
    datasets: [
      {
        data: [80, 38, 53],
      },
    ],
  };
  const pieData = [
    {
      name: 'Published products',
      population: 50,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },

    {
      name: 'Sellers products',
      population: 40,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Admin products',
      population: 20,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row
            style={{
              paddingVertical: mvs(10),
              alignItems: 'center',
              paddingHorizontal: mvs(20),
            }}>
            <View />
            <Bold style={{marginTop: mvs(10)}} label={t('admin_dashboard')} />
            <TouchableOpacity onPress={() => logOut()}>
              <Row>
                <Bold
                  style={{marginRight: mvs(10), fontSize: mvs(12)}}
                  label={t('log_out')}
                />
                {/* <LogOut /> */}
              </Row>
            </TouchableOpacity>
          </Row>
          <ScrollView style={{paddingBottom: mvs(20)}}>
            <Row style={{marginTop: mvs(20), paddingHorizontal: mvs(20)}}>
              <View style={styles.box}>
                <Bold color={colors.white} label={t('total_customer')} />
                <Bold
                  style={{marginTop: mvs(10), color: colors.white}}
                  label={status?.totalCustomer}
                />
              </View>
              <View style={styles.box}>
                <Bold color={colors.white} label={t('total_order')} />
                <Bold
                  style={{marginTop: mvs(10), color: colors.white}}
                  label={status?.total_orders}
                />
              </View>
            </Row>
            <Row style={{marginTop: mvs(20), paddingHorizontal: mvs(20)}}>
              <View style={styles.box}>
                <Bold
                  color={colors.white}
                  label={t('total_product_category')}
                />
                <Bold
                  style={{marginTop: mvs(10), color: colors.white}}
                  label={status?.total_product_category}
                />
              </View>
              <View style={styles.box}>
                <Bold color={colors.white} label={t('total_product_brand')} />
                <Bold
                  style={{marginTop: mvs(10), color: colors.white}}
                  label={status?.total_product_brand}
                />
              </View>
            </Row>
            <Bold
              style={{marginTop: mvs(20), paddingHorizontal: mvs(20)}}
              label={t('products')}
            />
            <PieChart
              data={pieData}
              width={width}
              height={200}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: colors.blueHalf,
                backgroundGradientTo: colors.primary,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor={'population'}
              backgroundColor={'transparent'}
              center={[10, 0]}
              absolute
              style={{height: 220}}
            />
            <Bold
              style={{marginTop: mvs(20), paddingHorizontal: mvs(20)}}
              label={t('sellers')}
            />
            <PieChart
              data={pieData}
              width={width}
              height={220}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: colors.blueHalf,
                backgroundGradientTo: colors.primary,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              accessor={'population'}
              backgroundColor={'transparent'}
              center={[10, 0]}
              absolute
              style={{height: 220}}
            />

            <Bold
              style={{marginTop: mvs(20), paddingHorizontal: mvs(20)}}
              label={t('category_wise_product_sale')}
            />

            <BarChart
              data={data}
              width={width}
              height={280}
              yAxisLabel=""
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: colors.blueHalf,
                backgroundGradientTo: colors.primary,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              style={styles.chart}
            />
            <Bold
              style={{marginTop: mvs(20), paddingHorizontal: mvs(20)}}
              label={t('category_wise_stock')}
            />
            <BarChart
              data={data}
              width={width}
              height={280}
              yAxisLabel=""
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: colors.blueHalf,
                backgroundGradientTo: colors.primary,
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              style={styles.chart}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
};
export default AdminDashBoard;
