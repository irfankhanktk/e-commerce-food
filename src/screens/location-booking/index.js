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
import {goBack} from 'navigation/navigation-ref';

const LocationBooking = props => {
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
        <TouchableOpacity onPress={() => goBack()}>
          <AntDesign name={'arrowleft'} size={25} color={colors.primary} />
        </TouchableOpacity>
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
          <MapDirections
            origin={origin}
            destination={destination}
            strokeWidth={3}
            strokeColor="blue"
          />
        </CustomMap>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{paddingHorizontal: mvs(15), marginTop: mvs(15)}}>
          <Bold label={'Arriving'} color={colors.placeholder} />
          <Row
            style={{
              width: '100%',
              marginTop: mvs(10),
              alignItems: 'center',
            }}>
            <Row
              style={{
                flex: 1,
                justifyContent: 'flex-start',
              }}>
              <ImageBackground
                borderRadius={mvs(100)}
                source={ProfileImage}
                style={styles.backGroundImage}>
                {/* <Image source={HomeImage} style={styles.innerImage} /> */}
              </ImageBackground>
              <View style={{padding: mvs(6), flex: 1}}>
                <Medium fontSize={12} label={'Mohsin Khattak '} />
                <Bold
                  numberOfLines={2}
                  fontSize={12}
                  label={'Audi A58745'}
                  color={colors.placeholder}
                />
              </View>
            </Row>
            <Row>
              <TouchableOpacity style={styles.iconView}>
                <Ionicons name={'call'} size={20} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.messageIcon}>
                <AntDesign name={'message1'} size={20} color={colors.primary} />
              </TouchableOpacity>
            </Row>
          </Row>
          <Row style={styles.fromLocation}>
            <LocationArrow style={{position: 'absolute', left: mvs(55)}} />

            <Regular fontSize={mvs(12)} label={moment().format('hh:mm A')} />
            <View style={styles.locationText}>
              <Regular
                color={colors.placeholder1}
                fontSize={mvs(12)}
                label={'From location xyz '}
              />
            </View>
          </Row>
          <Row style={styles.yourLocation}>
            <Regular fontSize={mvs(12)} label={moment().format('hh:mm A')} />
            <View style={styles.locationText}>
              <Regular
                color={colors.placeholder1}
                fontSize={mvs(12)}
                label={'To your location '}
              />
            </View>
          </Row>
          <Regular label={'No of passangers'} style={styles.noOfPassanger} />
          <Row style={styles.passangerAddContainer}>
            <TouchableOpacity
              onPress={() => setCount(count - 1)}
              style={styles.addSubBtn}>
              <Entypo name={'minus'} colors={colors.black} size={25} />
            </TouchableOpacity>
            <Regular color={colors.black} label={count} fontSize={mvs(16)} />
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              style={styles.addSubBtn}>
              <Entypo name={'plus'} colors={colors.black} size={25} />
            </TouchableOpacity>
          </Row>
          <Light label={'Min 2 persons'} style={styles.minPersonText} />
          <PrimaryButton
            onPress={() => setVisible(true)}
            title={'Book a Ride'}
            containerStyle={{height: mvs(40)}}
          />
          <Light
            label={'The minimum order to book a ride is €20.'}
            style={styles.minPersonText}
          />
        </View>
      </View>
      <BookingDriverModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
};
export default LocationBooking;
