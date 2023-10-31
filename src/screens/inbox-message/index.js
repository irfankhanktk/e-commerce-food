import {useTheme} from '@react-navigation/native';
import {ford} from 'assets/images';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {MessageInput} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import InboxChatCard from 'components/molecules/inbox-chat-card';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {goBack} from 'navigation/navigation-ref';
import React from 'react';
import {
  Alert,
  I18nManager,
  ImageBackground,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {getChatMessages, onSendMessage} from 'services/api/chat-api-actions';
import {Loader} from 'components/atoms/loader';
import {UTILS} from 'utils';
const InboxMessage = props => {
  const {id, shop, product} = props?.route?.params || {};

  const dispatch = useAppDispatch();
  const {chat, user} = useAppSelector(s => s);
  const {userInfo} = user;
  const [loading, setLoading] = React.useState(true);
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const colors = useTheme().colors;

  const {t} = i18n;

  const getMessages = async () => {
    try {
      const res = await getChatMessages(id);
      setMessages(res?.data || []);
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      getMessages();
    }, 30000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, []);
  const sendMessage = async () => {
    try {
      if (!message?.trim()) return;
      const res = await onSendMessage({
        conversation_id: id,
        message: message,
      });
      await getMessages();
      setMessage('');
      // setMessages(res?.data || []);
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  const renderItem = ({item}) => (
    <InboxChatCard item={{...item, me: userInfo?.id === item?.user_id}} />
  );
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
            <Image
              source={shop?.shop_logo ? {uri: shop?.shop_logo} : ford}
              style={styles.backGroundImage}
            />
          </View>
          <View style={{paddingHorizontal: mvs(10), flex: 1}}>
            <Bold color={colors.text} label={shop?.title} numberOfLines={1} />
            <Regular
              color={colors.text}
              numberOfLines={1}
              label={shop?.shop_name}
            />
          </View>
        </Row>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomFlatList
            inverted
            showsVerticalScrollIndicator={false}
            data={messages || []}
            renderItem={renderItem}
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
            <MessageInput value={message} onChangeText={setMessage} />
            <TouchableOpacity onPress={sendMessage} style={styles.sendIcon}>
              <Feather name={'send'} size={25} color={colors.white} />
            </TouchableOpacity>
          </Row>
        </>
      )}
    </View>
  );
};
export default InboxMessage;
