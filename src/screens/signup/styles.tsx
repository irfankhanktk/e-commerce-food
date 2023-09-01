import { StyleSheet } from "react-native";
import { mvs } from "config/metrices";
import { colors } from 'config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: mvs(30),
    },
    contentContainerStyle: {
        paddingVertical: mvs(30),
        paddingHorizontal: mvs(20)
    },
    button: {
        marginTop: mvs(20),
    },
    accountText: {
        color: colors.primary,
        alignSelf: 'center',
        marginTop: mvs(20)
    },
    backgroundContainer: {
        width: '100%',
        backgroundColor: colors.primary,
    },
    inputContainer: {
        marginTop: mvs(-125),
        paddingVertical: mvs(20),
        backgroundColor: colors.white,
        borderRadius: mvs(15),
        // flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginTexhzologyContainer: {
        marginTop: mvs(30),
        alignSelf: 'center',
        fontSize: mvs(15),
        marginBottom: mvs(20),
    },
    mainInnerContainer: {
        flex: 1,
        paddingHorizontal: mvs(20),
    },
});
export default styles;