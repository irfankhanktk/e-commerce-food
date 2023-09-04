import {useTheme} from '@react-navigation/native';
import {ford} from 'assets/images';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {MessageInput} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import InboxChatCard from 'components/molecules/inbox-chat-card';
import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import {goBack} from 'navigation/navigation-ref';
import React from 'react';
import {
  I18nManager,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';
const InboxMessage = props => {
  const dispatch = useAppDispatch();
  const colors = useTheme().colors;

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
    <View style={{...styles.container, backgroundColor: colors.background}}>
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
              color={colors.iconColor}
            />
          </TouchableOpacity>
          <View style={{...styles.imageContainer, borderColor: colors.primary}}>
            <ImageBackground
              borderRadius={mvs(10)}
              source={ford}
              style={styles.backGroundImage}>
              {/* <Image source={{uri: item?.image}} style={styles.innerImage} /> */}
            </ImageBackground>
          </View>
          <View style={{paddingHorizontal: mvs(10), flex: 1}}>
            <Bold color={colors.text} label={'Mitsubishi'} />
            <Regular
              color={colors.text}
              numberOfLines={1}
              label={'Mitsubishi@email.com'}
            />
          </View>
        </Row>
      </View>
      <CustomFlatList
        inverted
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />

      <Row
        style={{
          marginHorizontal: mvs(20),
          alignItems: 'center',
          paddingBottom: mvs(20),
        }}>
        <MessageInput />
        <TouchableOpacity style={styles.sendIcon}>
          <Feather name={'send'} size={25} color={colors.white} />
        </TouchableOpacity>
      </Row>
    </View>
  );
};
export default InboxMessage;
