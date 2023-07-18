import { mvs } from "config/metrices";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    main:{
           flex:1,
    },
    body:{flex:1,
        marginHorizontal:mvs(30),  
    },
    btn:{
        marginBottom:mvs(10)
   },
   starsBox:{
          alignItems:'center',marginVertical:mvs(10),borderWidth:1,borderColor:'lightgray',padding:mvs(30),borderRadius:mvs(10),
          backgroundColor:'#FCFCFE'
   },
   lowerBox:{
    alignItems:'flex-start', 
   },
   txtArea:{
    width:'100%', marginTop:mvs(10),borderWidth:1,borderColor:'lightgray',height:mvs(100),borderRadius:0
   }
})
export default styles;