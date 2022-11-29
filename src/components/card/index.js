import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Card = ({children, style, action}) => {
    return(
        <TouchableOpacity style={{ ...styles.container, ...style }} onPress={action}>{children}</TouchableOpacity>
    )
}

export default Card