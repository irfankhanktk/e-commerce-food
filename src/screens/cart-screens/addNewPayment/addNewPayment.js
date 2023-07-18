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

const AddNewPayment=({navigation})=>{

  
const [visibleModal,setModal]=useState(false);
  
const nextScreen=()=>{
  console.log('press')
  setModal(false);
  navigation.navigate('CartCheckout')
}

var LeftIcon = SVG['ArrowWhite'];

    return(
   
        <View style={styles.main}> 
           {/* <Header bgColor="#20D994" leftIcon="ArrowWhite" midLabel='Add New Payment' txtColor="white"
            onclickLeftIcon={()=>navigation.navigate('CartProceed')} /> */}
            <View style={styles.header}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate('CartProceed')
            }}>
        <LeftIcon   width={20}/>
        
      
     
            </TouchableOpacity>
            <Label color="white" style={styles.fontwight}  label="Add New Payment"/>
            </View>
           <ScrollView style={styles.body}>
           
           <Label label="Add credit card" color="#707070" size={mvs(16)} style={{marginTop:mvs(20)}}/>
           
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor={'lightgray'}></TextInput>
          
         <PrimaryTextInput leftIcon="Visa" />
          

           <Row>
           <PrimaryTextInput rightIcon="Calender" placeholder='Expires' style={{width:'45%',}}/>
           <PrimaryTextInput   placeholder="CVV" style={{width:'45%', }}/>
           </Row>

         
        </ScrollView>
        <PrimaryButton label="Save" color={'white'} height={mvs(60)} style={styles.btn} onclick={()=>setModal(true)}/>

     <ModalWrapper visible={visibleModal} onBackdropPress={nextScreen} onBackButtonPress={()=>setModal(false)}>
     <View style={{height:mvs(304),width:mvs(304),justifyContent:'center',alignItems:'center',}}>
       <TickGreen width={mvs(130)}/>
       <Bold label="Payment saved successfully" size={mvs(15)} color={'black'}/>
     </View>

     </ModalWrapper>
        </View>

    )
}
export default AddNewPayment;