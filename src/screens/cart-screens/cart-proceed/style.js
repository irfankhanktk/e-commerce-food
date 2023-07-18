import { mvs } from 'assets/metrices';
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    main:{
        flex:1,
     backgroundColor:'#F9F9F9',padding:10

    },
    body:{
        marginHorizontal:mvs(15), 
    },
    btn:{
         height:mvs(48),flexDirection:'row',alignItems:'center',justifyContent:'center',width:'90%',marginHorizontal:mvs(15),marginVertical:mvs(20),
         borderColor:'#20D994',borderWidth:1
    },
    modalView:{
        backgroundColor:'white',width:'100%',position:'absolute',bottom:0 , borderRadius:mvs(10),paddingVertical:mvs(20)
    }
})
export default styles;