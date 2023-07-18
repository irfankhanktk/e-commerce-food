import React from "react";
import { TouchableOpacity ,Text,StyleSheet} from "react-native";
const Bold=({label='',size=16,style,color})=>{
    return(
           
            <Text style={{...styles.main,fontSize:size,...style,color:color}}>{label}</Text>
          
    )
}
export default Bold;
const styles=StyleSheet.create({
    main:{
        fontWeight:'bold',
        fontFamily:'Tiro Devanagari Hindi'

    }
})