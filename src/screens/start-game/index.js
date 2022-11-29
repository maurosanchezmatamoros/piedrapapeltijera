import { View, Text } from "react-native";
import { Card } from "../../components";
import { Papel, Piedra, Tijera } from "../../constants/options";
import { styles } from './styles'

const StartGame = ({ handleGetResult }) => {

    return (
        <View style={styles.startGameContainer}>
            <Text style={styles.title}>Selecciona una opción</Text>
            <View style={styles.handsContainer}>
                <Card
                    children={<Piedra/>}
                    action={() => handleGetResult({id: 1, option: 'piedra'})}
                />
                <Card
                    children={<Papel/>}
                    action={() => handleGetResult({id: 2, option: 'papel'})}
                />
                <Card
                    children={<Tijera/>}
                    action={() => handleGetResult({id: 3, option: 'tijera'})}
                />
            </View>
        </View>
    )
}

export default StartGame