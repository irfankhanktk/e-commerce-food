import React, { useState } from "react";
import {View,Text,TouchableOpacity,ScrollView,Button,TextInput} from 'react-native';
import styles from "./style";
import Header1x2x from "components/atoms/headers/header-1x-2x";
import Header from "components/carts/header";
import Label from "components/carts/Label";
import { Row } from "components/atoms/row";
import OrderPreview from "components/carts/orderPreview";
import Bold from "components/carts/bold"; 
import { ForwardSign, Line,Location, PlusGreen, TickGreen, Visa } from "assets/svgs";
import { mvs } from "config/metrices";
import PrimaryButton from "../../../components/carts/button";
import DrawHorizentalLine from "components/carts/drawHorizentalLine";
import Modal from "react-native-modal";
import PaymentComponent from "components/carts/paymentComponent"; 
import { CommentInput, InputPresciption, InputWithIcon, PrimaryPhoneInput } from "components/atoms/inputs";
import PrimaryTextInput from "components/carts/PrimaryTextInput";
import { ModalWrapper } from "components/atoms/modal-wrapper";
import * as SVG from '../../../assets/svgs/index';
const CartCheckout=({navigation})=>{

  
const [visibleModal,setModal]=useState(false);
var LeftIcon = SVG['ArrowWhite'];
    return(
   
        <View style={styles.main}> 
           {/* <Header bgColor="#20D994" leftIcon="ArrowWhite" midLabel='CheckOut' txtColor="white" onclickLeftIcon={()=>navigation.navigate('AddNewPayment')}  />
            */}
             <View style={styles.header}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('AddNewPayment')
            }}>
        <LeftIcon   width={20}/>
        
      
     
            </TouchableOpacity>
            <Label color="white" style={styles.fontwight}  label="CheckOut"/>
            </View>
           <ScrollView style={styles.body}>
           
           <Label label="Delivery address" color="#707070" size={mvs(16)} style={{marginTop:mvs(20)}}/>
           
         <PrimaryTextInput leftIcon="LocationGreen" placeholder="Alqaim town, isb" rightIcon="SmTickGreen"/>
          
        <Label label="Payment method" size={mvs(16)} style={{marginTop:mvs(20)}}/>
        <PrimaryTextInput leftIcon="Visa" placeholder="xxxx xxxx xxxx 4321" rightIcon="RadioUnSelected"/>
        <PrimaryTextInput leftIcon="MasterCardLogo" placeholder="xxxx xxxx xxxx 4321" rightIcon="RadioSelected"/>
        <PrimaryTextInput leftIcon="Cash" placeholder="Alqaim town, isb" rightIcon="RadioUnSelected"/>
         
        </ScrollView>
        <PrimaryButton style={styles.btn} label="Pay 900 Rs" color={'white'} height={mvs(60)} onclick={()=>navigation.navigate('OrderNotificationCart')}/>

   
        </View>

    )
}
export default CartCheckout;