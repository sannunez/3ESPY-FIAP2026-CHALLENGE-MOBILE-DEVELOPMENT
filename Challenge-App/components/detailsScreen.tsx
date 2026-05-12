import { Text, View, StyleSheet} from "react-native"
import { RouteProp } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { RootStackParamList } from "../navigation/types"
import { getCarDetails } from "../hooks/getCarDetail"

type DetailsRoute = RouteProp<RootStackParamList, "Details">

export default function Details({route,}: {route: DetailsRoute}) {
    const { id } = route.params

    const { data, isLoading } = getCarDetails(id)

    if (isLoading) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header_title}>VEÍCULO</Text>
                <View>
                    <Text>Marca: {data?.make ?? "Não Disponível"}</Text>
                    <Text>Modelo: {data?.model ?? "Não Disponível"}</Text>
                    <Text>Versão: {data?.trim ?? "Não Disponível"}</Text>
                    <Text>Tipo: {data?.type ?? "Não Disponível"}</Text>
                </View>
            </View>
            
            <LinearGradient
                colors={['#1b1b1b',  '#3d3a3a', '#1b1b1b']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.category_box}
            >
                <Text style={[styles.texts, styles.h1]}>
                    DESEMPENHO
                </Text>

                <View>
                    <Text style={styles.texts}>Motor: {data?.motor ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Potência: {data?.potencia ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Torque: {data?.torqueMax ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>0 a 100/h: {data?.zeroACem ?? "Não Disponível"}</Text>
                </View>
            </LinearGradient>

            <LinearGradient
                colors={['#1b1b1b',  '#3d3a3a', '#1b1b1b']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.category_box}
            >
                <Text style={[styles.texts, styles.h1]}>MECÂNICA</Text>
                <View>
                    <Text style={styles.texts}>Transmissão: {data?.transmissao ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Tração: {data?.tracao ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Amortecedores: {data?.amortecedores ?? "Não Disponível"}</Text>
                </View>
            </LinearGradient>

            <LinearGradient
                colors={['#1b1b1b',  '#3d3a3a', '#1b1b1b']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.category_box}
            >
                <Text style={[styles.texts, styles.h1]}>CONFIGURAÇÕES</Text>
                <View>
                    <Text style={styles.texts}>Modos de Condução: {data?.modosConducao ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Modos de Volante: {data?.modosVolante ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Modos de Escapamento: {data?.modosEscapamento ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Modos de Amortecedor: {data?.modosAmortecedor ?? "Não Disponível"}</Text>
                </View>
            </LinearGradient>

            <LinearGradient
                colors={['#1b1b1b',  '#3d3a3a', '#1b1b1b']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.category_box}
            >
                <Text style={[styles.texts, styles.h1]}>OUTROS</Text>
                <View>
                    <Text style={styles.texts}>Faróis: {data?.farois ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Rodas e Pneus: {data?.rodasPneus ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Preço: {data?.preco ?? "Não Disponível"}</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171818',

    },
    header: {

    },
    header_title: {

    },
    category_box: {
        width: 360,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: '#383636',
        borderWidth: 2
    },
    texts: {
        color: '#fff',
        fontWeight: 'bold'
    },
    h1:{
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#135eff'
    }
});