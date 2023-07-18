import {LocationArrow} from 'assets/icons';
import {ProfileImage} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import CustomMap from 'components/atoms/custom-map';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import moment from 'moment';
import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {Marker} from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import MapDirections from 'components/atoms/custom-map-direction';
import BookingDriverModal from 'components/molecules/modals/booking-driver-modal';
import GoogleSearchBar from 'components/atoms/google-auto-place';

const AddressHistory = props => {
  const {user, location} = useAppSelector(s => s?.user);
  const origin = {latitude: 37.78825, longitude: -122.4324};
  const destination = {latitude: 37.7749, longitude: -122.4194};
  const [visible, setVisible] = React.useState(false);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [count, setCount] = useState(2);
  return (
    <View style={styles.container}>
      <Row style={styles.header}>
        <AntDesign name={'arrowleft'} size={25} color={colors.primary} />
        <Bold
          style={{marginLeft: mvs(20)}}
          fontSize={18}
          color={colors.primary}
          label={'Booking request'}
        />
      </Row>
      <View style={styles.body}>
        <CustomMap>
          <Marker
            // coordinate={{latitude: 37.78825, longitude: -122.4324}}
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title="Marker Title"
            description="Marker Description"
          />
        </CustomMap>
        <GoogleSearchBar />
      </View>

      <BookingDriverModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
};
export default AddressHistory;
