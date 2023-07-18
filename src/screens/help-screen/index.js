import {
  Call,
  DeliveryBike,
  DeliveryBoy,
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
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import CollapsibleView from 'components/atoms/collapsible-view';

const HelpScreen = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const data = ['Allies', 'restaurant', 'bars', 'cafes', 'Italian foods'];
  const food = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemPress = index => {
    setSelectedItemIndex(index);
  };
  const renderItem = ({item}) => (
    <CollapsibleView label={'Lorem ipsum dolor sit amet?'}>
      <Regular
        numberOfLines={20}
        label={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem quis mi hendrerit viverra ac eu enim. Donec nulla eros, aliquam nec malesuada a, scelerisque non tortor. Phasellus nulla purus, pharetra a lacus non, vestibulum eleifend quam. Integer vel pharetra lacus. Phasellus ornare suscipit erat, in ultricies enim condimentum consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem quis mi hendrerit viverra ac eu enim. Donec nulla eros, aliquam nec malesuada a, scelerisque non tortor. Phasellus nulla purus, pharetra a lacus non, vestibulum eleifend quam. Integer vel pharetra lacus. Phasellus ornare suscipit erat, in ultricies enim condimentum consectetur'
        }
      />
    </CollapsibleView>
  );
  return (
    <View style={styles.container}>
      <HomeHeader
        placeholder={'Search for restaurants'}
        title={'New York City'}
        back={true}
        isSearch={true}
      />

      <View style={{marginTop: mvs(20)}}>
        <FlatList
          ListHeaderComponent={
            <View>
              <Row>
                <View style={styles.icons}>
                  <Call height={mvs(28)} width={mvs(28)} />
                  <Bold label={'Ride'} style={{marginTop: mvs(7)}} />
                </View>
                <View style={styles.icons}>
                  <Message height={mvs(28)} width={mvs(28)} />
                  <Bold label={'Delivery'} style={{marginTop: mvs(7)}} />
                </View>
                <View style={styles.icons}>
                  <Inbox height={mvs(28)} width={mvs(28)} />
                  <Bold label={'Pick up'} style={{marginTop: mvs(7)}} />
                </View>
              </Row>
              <View style={{marginBottom: mvs(16), marginTop: mvs(20)}}>
                <Bold label={'FAQS'} fontSize={mvs(20)} />
              </View>
            </View>
          }
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          // columnWrapperStyle={styles.columnWrapperStyle}

          data={food}
          renderItem={renderItem}
          keyExtractor={(item, index) => index?.toString()}
        />
      </View>
    </View>
  );
};
export default HelpScreen;
