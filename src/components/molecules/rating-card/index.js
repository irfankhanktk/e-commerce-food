import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import { View, Image, StyleSheet } from 'react-native';
import { mvs } from 'config/metrices';
import React from 'react';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import { stars } from 'assets/images';
const RatingCard = ({
  item,
  index
}) => {
  return (

    <Row style={[styles.container, { marginBottom: index === 4 ? mvs(40) : 0 }]} key={index}>
      <View style={styles.mainView}>
        <Regular label={item?.name} color={colors.black} fontSize={12} />

      </View>
      <View style={styles.colorView}>

        <View style={{
          height: mvs(13), width: mvs(item?.with),
          backgroundColor: item?.color,
        }} />
      </View>
    </Row>
  );
};
export default RatingCard;
const styles = StyleSheet.create({
  container: { paddingVertical: mvs(10), alignItems: 'center' },
  colorView: { height: mvs(13), width: mvs(230), backgroundColor: colors.white },
  mainView: { height: mvs(13), width: mvs(90) },
});