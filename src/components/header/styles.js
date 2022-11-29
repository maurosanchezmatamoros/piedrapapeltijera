import { StyleSheet } from "react-native";
import colors from '../../constants/colors'

export const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        backgroundColor: colors.primary,
        justifyContent: 'flex-end'
    },
    headerText: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.white,
        marginBottom: 10,
        fontFamily: 'PatrickHand'
    }
})