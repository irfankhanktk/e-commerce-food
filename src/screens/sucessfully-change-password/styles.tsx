import { StyleSheet } from "react-native";
import { mvs } from "config/metrices";
import { colors } from 'config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    contentContainerStyle: {
        paddingVertical: mvs(30),
        paddingHorizontal: mvs(20)
    },

    backgroundContainer: {
        width: '100%',
        height: mvs(250),
        backgroundColor: colors.primary,
    },
    inputContainer: {
        marginTop: mvs(140),
        backgroundColor: colors.white,
        borderRadius: mvs(15),
        height: mvs(440),
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
    paswordChangedTxt: {
        marginTop: mvs(30),
        alignSelf: 'center',
        fontSize: mvs(15),

    },
    congraTxt: {
        marginTop: mvs(16),
        alignSelf: 'center',
        fontSize: mvs(15),
        color: colors.green

    },
    contentTxt: {
        marginTop: mvs(12),
        alignSelf: 'center',
        fontSize: mvs(15),
        textAlign: 'center'
    },
    mainInnerContainer: {
        width: '100%',
        position: 'absolute',
        paddingHorizontal: mvs(20),
    },
});
export default styles;