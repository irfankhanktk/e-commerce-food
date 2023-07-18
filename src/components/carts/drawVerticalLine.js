import { mvs } from "config/metrices";
import React from "react";
import { TouchableOpacity ,Text,StyleSheet,View} from "react-native";
 
const DrawVerticalLine=({ style})=>{
    return(
           
            <View style={{...styles.main,...style}}>
               
            </View>
          
    )
}
export default DrawVerticalLine;
const styles=StyleSheet.create({
    main:{borderLeftColor:'#20D994',alignItems:'center' ,borderLeftWidth:3,marginLeft:mvs(27),height:mvs(100),borderStyle:'dotted' }
    
})