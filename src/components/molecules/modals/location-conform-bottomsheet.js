import {EditorIcon, Union} from 'assets/icons';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import Regular from 'typography/regular-text';
import Medium from 'typography/medium-text';
import {PrimaryButton} from 'components/atoms/buttons';
import {navigate} from 'navigation/navigation-ref';

const ConformLocationBottomSheet = ({address = '----'}) => {
  return (
    <View
      style={{
        padding: mvs(15),
        borderTopLeftRadius: mvs(20),
        borderTopRightRadius: mvs(20),
        paddingHorizontal: mvs(20),
        backgroundColor: colors.white,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <View>
        <Row>
          <Row style={{justifyContent: 'flex-start'}}>
            <Union />
            <Regular
              fontSize={mvs(18)}
              style={{marginLeft: mvs(20)}}
              label={address}
            />
          </Row>
          <EditorIcon />
        </Row>
        <TouchableOpacity
          onPress={() => navigate('AddNewAddress')}
          style={styles.addNewAddressContainer}>
          <Row style={{justifyContent: 'flex-start'}}>
            <AntDesign name="plus" size={20} color={colors.green} />
            <Medium style={{marginLeft: mvs(20)}} label={'Add new address'} />
          </Row>
        </TouchableOpacity>
        <PrimaryButton
          containerStyle={{marginTop: mvs(25)}}
          title={'Confirm Location'}
          onPress={() => navigate('Drawer')}
        />
      </View>
    </View>
  );
};

export default ConformLocationBottomSheet;

const styles = StyleSheet.create({
  addNewAddressContainer: {
    borderTopWidth: 1,
    borderColor: colors.placeholder,
    // padding: mvs(5),
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    borderBottomWidth: 1,
    marginTop: mvs(10),
  },
});
