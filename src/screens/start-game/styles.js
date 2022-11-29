import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    startGameContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary
    },
    handsContainer: {
        marginVertical: 20
    },
    handImage: {
        width: 100,
        height: 80,
        objectFit: 'contain',
        margin: 5,
        backgroundColor: colors.white
    },
    title: {
        fontFamily: 'PatrickHand',
        fontSize: 30,
        textAlign: 'center'
    }
})