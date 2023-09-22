import { Alert } from 'react-native';
import { AppDispatch, RootState } from 'store';
import { UTILS } from 'utils';
import { getData, postData } from '.';
import { setConversations } from '../../store/reducers/chat-reducer';
import { URLS } from './api-urls';




//getConversationsList
export const getConversationsList = (
  setLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.chat.get_conversations}`);
      console.log('res: getConversationsList::', res);
      dispatch(setConversations(res?.data || []));
    } catch (error: any) {
      console.log('error in getConversationsList', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const getChatMessages = (id: any) => getData(`${URLS.chat.get_chat_messages}${id}`)
export const onSendMessage = (data: any) => postData(`${URLS.chat.send_message}`, data)
export const onCreateConveration = (data: any) => postData(`${URLS.chat.create_conversation}`, data)