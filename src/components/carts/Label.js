import React from "react";
import { TouchableOpacity ,Text,StyleSheet} from "react-native";

const Label=({label='',size=16,style,color='black'})=>{
    return(
           
            <Text style={{...styles.main,fontSize:size,color:color,...style}}>{label}</Text>
          
    )
}
export default Label;
const styles=StyleSheet.create({
    main:{fontFamily:'Cochin',}
    
})