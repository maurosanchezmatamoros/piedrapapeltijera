import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary
    },
    optionsContainer: {
        flexDirection: 'row'
    },
    options: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    optionsTitle: {
        fontSize: 24,
        fontFamily: 'PatrickHand'
    },
    result: {
        marginTop: 20,
        marginBottom: 40
    },
    resultText: {
        fontSize: 32,
        fontFamily: 'PatrickHand'
    }
})