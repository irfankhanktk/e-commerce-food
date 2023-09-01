import { StyleSheet } from "react-native";
import { mvs } from "config/metrices";
import { colors } from 'config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    lottie: {
        height: mvs(100),
        width: mvs(100),
        alignSelf: 'center',
        marginTop: mvs(20),
    },
    contentContainerStyle: {
        paddingTop: 80,
        paddingHorizontal: mvs(20)
    },
    button: {
        marginTop: mvs(20),
    },
    txt: { fontSize: mvs(20), marginBottom: mvs(10), color: colors.primary },
    backgroundContainer: {
        width: '100%',
        height: mvs(250),
        backgroundColor: colors.primary,
    },
    inputContainer: {
        marginTop: mvs(140),
        backgroundColor: colors.white,
        borderRadius: mvs(15),
        height: mvs(350),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingHorizontal: mvs(20),
    },
    loginTexhzologyContainer: {
        marginTop: mvs(20),
        paddingLeft: mvs(20),
        fontSize: mvs(15),
        marginBottom: mvs(20),
    },
    mainInnerContainer: {
        width: '100%',
        position: 'absolute',
        paddingHorizontal: mvs(20),
    },

});
export default styles;