import { useState } from "react"
import { View, Text, Button } from "react-native"
import { Card } from "../../components"
import colors from "../../constants/colors"
import { Papel, Piedra, Tijera } from "../../constants/options"
import { styles } from "./styles"

const Result = ({ userOption, handleGetResult }) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 3 + 1))

    const handleMyOption = () => {
        if (userOption.id === 1) return <Piedra />
        if (userOption.id === 2) return <Papel />
        if (userOption.id === 3) return <Tijera />
        else return null
    }

    const handleRandomOption = () => {
        if (randomNumber == 1) return <Piedra />
        if (randomNumber == 2) return <Papel />
        if (randomNumber == 3) return <Tijera />
        else return null
    }

    const handleResult = () => {
        if (userOption.id === randomNumber) return 'EMPATE'
        if (userOption.id === 1 && randomNumber === 2) return 'PERDISTE'
        if (userOption.id === 1 && randomNumber === 3) return 'GANASTE'
        if (userOption.id === 2 && randomNumber === 1) return 'GANASTE'
        if (userOption.id === 2 && randomNumber === 3) return 'PERDISTE'
        if (userOption.id === 3 && randomNumber === 1) return 'PERDISTE'
        if (userOption.id === 3 && randomNumber === 2) return 'GANASTE'
        else return 'ERROR'
    }

    return(
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <View style={styles.options}>
                    <Text style={styles.optionsTitle}>YO</Text>
                    <Card children={handleMyOption()} />
                </View>
                <View style={styles.options}>
                    <Text style={styles.optionsTitle}>RIVAL</Text>
                    <Card children={handleRandomOption()} />
                </View>
            </View>
            <View style={styles.result}>
                <Text style={styles.resultText}>{handleResult()}</Text>
            </View>
            <Button
                color={colors.primary}
                style={styles.button}
                title='VOLVER A JUGAR'
                onPress={() => handleGetResult(null)} />
        </View>
    )
}

export default Result