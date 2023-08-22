import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {PrimaryButton} from 'components/atoms/buttons';
import {Loader} from 'components/atoms/loader';
import {colors} from 'config/colors';
import {height, mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  deletePermanentAccount,
  onLogoutPress,
  onUpdateProfile,
} from 'services/api/auth-api-actions';
import {postFileData} from 'services/api/hotel/api-actions';
import TabParamList from 'types/navigation-types/bottom-tab';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import i18n from '../../translation/index';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {Row} from 'components/atoms/row';
import {user} from 'assets/images';
import Bold from 'typography/bold-text';
import {
  Brands,
  Carttt,
  Currency,
  Heart,
  Language,
  Location,
  Message,
  Pc,
  Refund,
  Shop,
  UserEdit,
  Wallet,
} from 'assets/icons';

const UserTab = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: mvs(20),
          height: mvs(500),
        }}>
        <Row style={{marginTop: mvs(25), justifyContent: 'flex-start'}}>
          <ImageBackground
            source={user}
            style={styles.backgroudImage}></ImageBackground>
          <View style={{flex: 1, marginLeft: mvs(10)}}>
            <Regular color={colors.white} label={'Paul K. Jensen'} />
            <Regular
              fontSize={mvs(12)}
              numberOfLines={1}
              color={colors.white}
              label={'customer@example.com'}
            />
          </View>
          <PrimaryButton
            textStyle={{color: colors.primary}}
            title="Log out"
            containerStyle={styles.loginBtn}
          />
        </Row>
        <Row style={{marginTop: mvs(25)}}>
          <View style={styles.boxContainer}>
            <Bold label={'01'} />
            <Regular
              fontSize={mvs(10)}
              color={colors.darkBlack}
              label={'In Your Cart'}
            />
          </View>
          <View style={styles.boxContainer}>
            <Bold label={'07'} />
            <Regular
              fontSize={mvs(10)}
              color={colors.darkBlack}
              label={'In Your Wishlist'}
            />
          </View>
          <View style={styles.boxContainer}>
            <Bold label={'75'} />
            <Regular
              fontSize={mvs(10)}
              color={colors.darkBlack}
              label={'Your Ordered'}
            />
          </View>
        </Row>
        <Row style={{marginTop: mvs(25)}}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <View style={styles.itemsContainer}>
              <Language />
            </View>
            <Regular
              color={colors.white}
              label={'Language'}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <View style={styles.itemsContainer}>
              <Currency />
            </View>
            <Regular
              color={colors.white}
              label={'Currency'}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('EditProfile')}
            style={{alignItems: 'center'}}>
            <View style={styles.itemsContainer}>
              <UserEdit />
            </View>
            <Regular
              color={colors.white}
              label={'User Eidt'}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('AddressDetails')}
            style={{alignItems: 'center'}}>
            <View style={styles.itemsContainer}>
              <Location />
            </View>
            <Regular
              color={colors.white}
              label={'Address'}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
        </Row>
        <View style={styles.boxContainer1}>
          <Row style={{marginTop: mvs(10)}}>
            <TouchableOpacity
              onPress={() => navigate('MyWallet')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Wallet />
              </View>
              <Regular
                style={{marginTop: mvs(5)}}
                label={'My Wallet'}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('OrderHistory')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Carttt />
              </View>

              <Regular
                style={{marginTop: mvs(5)}}
                label={'Orders'}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('MyWishList')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Heart />
              </View>

              <Regular
                style={{marginTop: mvs(5)}}
                label={'My Wishlist'}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('RefundStatus')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Refund />
              </View>

              <Regular
                style={{marginTop: mvs(5)}}
                numberOfLines={2}
                label={'Refunds Requests'}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
          </Row>
          <Row style={{marginTop: mvs(10)}}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Message />
              </View>
              <Regular
                style={{marginTop: mvs(5)}}
                label={'Messages'}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
          </Row>
        </View>
      </View>
      <View style={{paddingHorizontal: mvs(20), marginTop: mvs(30)}}>
        <TouchableOpacity onPress={() => navigate('BrowseAllVenders')}>
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Shop />
            <Regular
              style={{marginLeft: mvs(20)}}
              label={'Browse All Venders'}
            />
          </Row>
        </TouchableOpacity>
        <Row
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: mvs(20),
          }}>
          <Pc />
          <Regular style={{marginLeft: mvs(20)}} label={'Followed Venders'} />
        </Row>
      </View>
    </View>
  );
};
export default UserTab;
