import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';

import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import i18n from 'translation';
import styles from './styles';
import ChatCard from 'components/molecules/chat-card';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {getWishlist} from 'services/api/api-actions';
import {getConversationsList} from 'services/api/chat-api-actions';
import {Loader} from 'components/atoms/loader';

const MessageTab = props => {
  const dispatch = useAppDispatch();
  const {chat} = useAppSelector(s => s);
  const {conversation_list} = chat;
  const [loading, setLoading] = React.useState(true);
  const colors = useTheme().colors;
  const isFocus = useIsFocused();

  const {t} = i18n;
  const featuredCategories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
  ];
  React.useEffect(() => {
    if (isFocus) dispatch(getConversationsList(setLoading));
  }, [isFocus]);
  const renderItem = ({item}) => (
    <ChatCard
      item={item}
      onPress={() => navigate('InboxMessage', {id: item?.id, shop: item})}
    />
  );
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('message')} />
      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          showsVerticalScrollIndicator={false}
          data={conversation_list}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: mvs(20),
            paddingHorizontal: mvs(20),
          }}
        />
      )}
    </View>
  );
};
export default MessageTab;
