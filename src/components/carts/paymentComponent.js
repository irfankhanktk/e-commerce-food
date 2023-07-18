import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Bold from '../../components/carts/bold';
import { mvs } from 'config/metrices';
 import * as SVG from '../../assets/svgs/index';
import { Row } from 'components/atoms/row';
import Label from './Label';
 

const PaymentComponent = ({
  leftIcon = '',
  rightIcon='',
  title = 'method of payment',
  AccountNumber = 'Account number',
  amount = '',
selected,
  onClick
}) => {
  
  const LeftIcon = SVG[leftIcon];
  const RightIcon=SVG[rightIcon];
  return (
    <TouchableOpacity style={styles.main} onPress={onClick}>
      {/* {selected && (
        <SVG.RadioButtonSelected
          style={{position: 'absolute', right: -3, top: -1, Zindex: 100}}
        />
      )} */}
      <Row alignItems="center" justifyContent="space-between">
       {LeftIcon? <LeftIcon/> : null} 
        <View style={{flex: 1, paddingHorizontal: mvs(10)}}>
          
            <Bold label={title} size={mvs(16)} color={'black'}/>
           
          <Label label={AccountNumber} size={mvs(14)} color={'gray'}/>
        </View>
       {/* {RightIcon? <RightIcon/> : null} */}
        {
         RightIcon? <RightIcon/>:null }
      </Row>
    </TouchableOpacity>
  );
};
export default PaymentComponent;
const styles = StyleSheet.create({
  main: {
    height: mvs(70),
    //width: mvs(366),
    paddingHorizontal:mvs(10),
    marginVertical: mvs(0),
     
    
    justifyContent: 'center',

  },
});