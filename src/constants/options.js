import { Image } from "react-native"
import { StyleSheet } from "react-native";
import colors from "./colors";

export const Piedra = ({ style }) => {
    return(
        <Image
            style={{...styles.handImage, ...style}}
            source={require("../../assets/img/piedra.png")}
        />
    )
}
export const Papel = ({ style }) => {
    return(
        <Image
            style={{...styles.handImage, ...style}}
            source={require("../../assets/img/papel.png")}
        />
    )
}
export const Tijera = ({ style }) => {
    return(
        <Image
            style={{...styles.handImage, ...style}}
            source={require("../../assets/img/tijera.png")}
        />
    )
}

const styles = StyleSheet.create({
    handImage: {
        width: 100,
        height: 80,
        objectFit: 'contain',
        margin: 5,
        backgroundColor: colors.white,
    }
})
