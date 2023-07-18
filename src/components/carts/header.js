import { mvs } from 'assets/metrices';
import { BackArrow, LocationGreen } from 'assets/svgs';
import { Row } from 'components/atoms/row';
import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import * as SVG from '../../assets/svgs/index';
import Label from './Label';
import { Touchable } from 'react-native'; 


const Header=({bgColor='white',RightLabel='',rightIcon='',leftIcon='',midLabel='',txtColor='black',midSecond='',onclickLeftIcon })=>{

    var LeftIcon = SVG[leftIcon];
   var RightIcon = SVG[rightIcon];


    return(

        <Row style={{...style.main,backgroundColor:bgColor}}>
            <TouchableOpacity onPress={onclickLeftIcon}>
            {LeftIcon?<LeftIcon width={20}/>:null}
            </TouchableOpacity>
            <View style={{marginTop:mvs(10)}}>
             <Label label={midLabel} color={txtColor}  size={mvs(20)}/>
             <Label label={midSecond} color={txtColor}  size={mvs(15)}/>
             </View>
             <Row style={{...style.main,backgroundColor:bgColor}}>

            <Label label={RightLabel} color='#9D9D9D'/>
             {RightIcon?  <RightIcon width={15}/>:null}

             
              
              
        </Row>
              
              
        </Row>
    )
};
export default Header;
const style=StyleSheet.create({
    main:{
        height:mvs(70),backgroundColor:'green',flexDirection:'row',alignItems:'center',padding:mvs(10)
    }
})