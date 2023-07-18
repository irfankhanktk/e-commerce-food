import React from 'react';

import {ProfileInPut} from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {Image, StyleSheet, View} from 'react-native';
import Regular from 'typography/regular-text';

const ProfileCard = ({
  item,
  index,
  onPress = () => {},
  onChangeText = t => {},
}) => {
  return (
    <>
      <Row key={index} style={[styles.profileContainer]}>
        <Image
          source={item?.image}
          style={{
            height: mvs(30),
            width: mvs(20),
          }}
        />
        <View style={{flex: 1, paddingHorizontal: mvs(10)}}>
          <ProfileInPut
            editable={item?.editable}
            placeholder={item?.placeholder}
            onChangeText={onChangeText}
            value={item?.title}
            containerStyle={{
              borderColor: 'white',
            }}
          />
        </View>
        {!item?.editable && (
          <Regular label={item?.value} fontSize={mvs(15)} onPress={onPress} />
        )}
      </Row>
    </>
  );
};

export default ProfileCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: mvs(30),
  },
  profileContainer: {
    paddingHorizontal: mvs(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
