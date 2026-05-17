import { View, StyleSheet, Text } from "react-native"

export default function RangerRaptorCard(){
    return(
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",        alignContent: "center",
        height: 400,
        width:  350,
        margin: 10,
        borderRadius: 30,
        borderColor: "#333333",
        backgroundColor: "#725252"
    }
})
