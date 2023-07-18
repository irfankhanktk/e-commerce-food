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
        backgroundColor:'#E60723',height:mvs(48),flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:mvs(20),marginBottom:mvs(20)
    }
})
export default styles;