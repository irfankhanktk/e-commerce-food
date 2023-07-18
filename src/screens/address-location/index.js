import {ButtonIcons} from 'components/atoms/buttons';
import {EmptyList} from 'components/atoms/empty-list';
import HomeHeader from 'components/atoms/headers/home-header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React, {useState} from 'react';
import {Alert, FlatList, TouchableOpacity, View} from 'react-native';
import {getUserAddresses} from 'services/api/api-actions';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import styles from './styles';
import {Loader} from 'components/atoms/loader';

const AddressLocation = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [addresses, setAddresses] = React.useState(false);

  const dispatch = useAppDispatch();
  const {t} = i18n;
  const getAddresses = async () => {
    try {
      setLoading(true);
      const res = await getUserAddresses('');
      console.log('addresses res:::', res?.data);
      setAddresses(res?.data);
    } catch (error) {
      Alert.alert('Error', UTILS._returnAddress(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getAddresses();
  }, []);
  const food = [
    {
      id: 1,
      title: 'My location',
      subTitle: 'Add your home address',
      left: 'HomeIcon',
      right: 'RightArrow',
    },
    {
      id: 1,
      title: 'Company location',
      subTitle: 'Street 123, Ga, USA',
      left: 'Company',
      right: 'Pen',
    },
    {
      id: 1,
      title: 'Abc, shop',
      subTitle: 'Street 123, Ga, USA',
      left: 'MapPlus',
      right: 'Pen',
    },
    {
      id: 1,
      title: 'Abc friend',
      subTitle: 'Street 123, Ga, USA',
      left: 'MapPlus',
      right: 'Pen',
    },
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const isRecentLocation = false;
  const handleItemPress = index => {
    setSelectedItemIndex(index);
  };
  const renderItem = ({item}) => (
    <ButtonIcons
      onPress={() => navigate('AddNewAddress', {address: item})}
      title={item?.title}
      subTitle={item?.subTitle}
      left={isRecentLocation ? 'Clock' : 'MapPlus'}
      right={isRecentLocation ? undefined : 'Pen'}
    />
  );
  return (
    <View style={styles.container}>
      <HomeHeader
        placeholder={'Search addresses'}
        title={'Address manager'}
        back={true}
        isSearch={true}
        onChangeText={setSearchTerm}
      />
      {loading ? (
        <Loader />
      ) : (
        <View style={{flex: 1}}>
          <View style={{paddingHorizontal: mvs(20), marginTop: mvs(50)}}>
            <Row>
              <Bold
                label={isRecentLocation ? 'Recent locations' : 'My location'}
                fontSize={mvs(17)}
                color={colors.primary}
              />
              <Medium
                label={isRecentLocation ? 'Clear' : 'Edit'}
                fontSize={mvs(12)}
                color={colors.red}
              />
            </Row>
          </View>
          <View>
            <FlatList
              ListEmptyComponent={
                !loading && <EmptyList label={'No address found'} />
              }
              contentContainerStyle={styles.contentContainerStyle}
              showsVerticalScrollIndicator={false}
              data={
                searchTerm?.trim()?.length
                  ? addresses?.filter(item =>
                      item?.title?.match(new RegExp(searchTerm, 'i')),
                    )
                  : addresses
              }
              renderItem={renderItem}
              keyExtractor={(_, index) => index?.toString()}
            />
          </View>
          <View
            style={{
              paddingHorizontal: mvs(20),
              flex: 1,
              marginTop: mvs(50),
            }}>
            {!isRecentLocation && (
              <TouchableOpacity
                onPress={() => navigate('AddNewAddress')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Bold label={'+'} fontSize={mvs(20)} color={colors.primary} />
                <Bold
                  label={'Add other address'}
                  fontSize={mvs(13)}
                  color={colors.primary}
                  style={{
                    marginHorizontal: mvs(13),
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};
export default AddressLocation;
