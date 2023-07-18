import {
  Call,
  DeliveryBike,
  DeliveryBoy,
  HelpCenterIcon,
  Inbox,
  Message,
  RideCar,
} from 'assets/icons';
import HomeHeader from 'components/atoms/headers/home-header';
import {Row} from 'components/atoms/row';
import HomeCard from 'components/molecules/home-card';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React, {useState} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import CollapsibleView from 'components/atoms/collapsible-view';
import {ButtonArrow, PrimaryButton} from 'components/atoms/buttons';
import Medium from 'typography/medium-text';
import {colors} from 'config/colors';

const HelpCenterScreen = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const food = [
    {id: 1, title: 'Report a problem'},
    {id: 2, title: 'Feedbacks'},
    {id: 3, title: 'Terms and conditions'},
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemPress = index => {
    setSelectedItemIndex(index);
  };
  const renderItem = ({item}) => <ButtonArrow title={item?.title} />;
  return (
    <View style={styles.container}>
      <HomeHeader
        placeholder={'Search for restaurants'}
        title={'New York City'}
        back={true}
        isSearch={true}
      />

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={food}
        renderItem={renderItem}
        keyExtractor={(_, index) => index?.toString()}
      />
      <View
        style={{
          alignItems: 'center',
          marginTop: mvs(30),
        }}>
        <HelpCenterIcon width={mvs(250)} height={mvs(250)} />
        <Medium
          label={'Call us : +92 123 4563 123'}
          color={colors.placeholder}
          fontSize={mvs(12)}
        />
      </View>
      <View
        style={{
          marginTop: mvs(13),
          paddingHorizontal: mvs(20),
          paddingBottom: mvs(Platform.OS === 'android' ? 20 : 40),
        }}>
        <PrimaryButton title="Send us email" />
      </View>
    </View>
  );
};
export default HelpCenterScreen;
