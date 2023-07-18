import React from "react";
import { TouchableOpacity ,Text,StyleSheet} from "react-native";
 
import Bold from "./bold";
import Label from "./Label";
import { mvs } from "config/metrices";
const PrimaryButton=({onclick,label='',color,width,height,style})=>{
    return(
           <TouchableOpacity style={{...styles.main,width:width,height:height,...style}} onPress={onclick}>
           <Label label={label} size={mvs(20)} color={color}/>
           </TouchableOpacity>
    )
}
export default PrimaryButton;
const styles=StyleSheet.create({
    main:{
        backgroundColor:'#20D994', justifyContent:'center',alignItems:'center',borderRadius:mvs(10),marginVertical:mvs(20)

    }
})