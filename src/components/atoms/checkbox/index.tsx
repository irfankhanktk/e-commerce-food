import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

type IProps = {
    label?: string | number;
    checked?: boolean;
    disabled?:boolean;
    children?: JSX.Element | JSX.Element[]
    onPress: () => void;

};
export const Checkbox = (props: IProps) => {
    const {
        checked,
        onPress,
        disabled
    } = props;
    return (
        <TouchableOpacity disabled={disabled} style={styles.container} onPress={onPress}>
            {checked && <Icon name={'check'} color={colors.primary} size={mvs(16)} />}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        borderRadius: mvs(5),
        height: mvs(20),
        width: mvs(20),
        alignItems: 'center',
        justifyContent: 'center',
    }
});