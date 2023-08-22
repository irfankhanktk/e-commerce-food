import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import {goBack, navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  I18nManager,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import i18n from 'translation';
import styles from './styles';
import InboxChatCard from 'components/molecules/inbox-chat-card';
import {Row} from 'components/atoms/row';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from 'config/colors';
import {ford, forklift} from 'assets/images';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
const InboxMessage = props => {
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const featuredCategories = [
    {
      id: 1,
    },
    {
      id: 2,
      me: true,
    },
    {
      id: 3,
    },
    {
      id: 3,
      me: true,
    },
    {
      id: 3,
      me: false,
    },
  ];
  const featuredProduct = ({item}) => <InboxChatCard item={item} />;
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: mvs(20),
          paddingVertical: mvs(15),
        }}>
        <Row
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => goBack()}>
            <FontAwesome5
              name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
              size={mvs(20)}
              color={colors.primary}
            />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <ImageBackground
              borderRadius={mvs(10)}
              source={ford}
              style={styles.backGroundImage}>
              {/* <Image source={{uri: item?.image}} style={styles.innerImage} /> */}
            </ImageBackground>
          </View>
          <View style={{paddingHorizontal: mvs(10), flex: 1}}>
            <Bold label={'Mitsubishi'} />
            <Regular numberOfLines={1} label={'Mitsubishi@email.com'} />
          </View>
        </Row>
      </View>
      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
    </View>
  );
};
export default InboxMessage;
