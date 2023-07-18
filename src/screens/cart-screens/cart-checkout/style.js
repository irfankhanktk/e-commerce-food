import { mvs } from 'assets/metrices';
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    main:{
        flex:1,
     backgroundColor:'#F9F9F9',
     

    },
    header:{
        backgroundColor:"#20D994",padding:20,flexDirection:'row'
    },
    fontwight:{
        fontwight:'bold',
        marginLeft:20,
        fontSize:17
    },
    btn:{   marginBottom:mvs(10),
        width:mvs(350),height:mvs(55),alignSelf:'center'},
    body:{
        marginHorizontal:mvs(20),flex:2,
    },
  
    input:{height:mvs(51),borderWidth:1,borderColor:'#20D994',marginVertical:mvs(10),paddingLeft:mvs(10),fontSize:mvs(18)},
   
})
export default styles;