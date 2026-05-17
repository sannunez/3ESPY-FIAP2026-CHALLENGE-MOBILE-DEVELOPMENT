import { Text, View, ImageBackground, StyleSheet} from "react-native"
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/types"
import { getCarDetails } from "../hooks/getCarDetail"
import { useFonts, Montserrat_500Medium, Montserrat_700Bold, Montserrat_700Bold_Italic} from '@expo-google-fonts/montserrat';

type DetailsRoute = RouteProp<RootStackParamList, "Details">

export default function Details({route,}: {route: DetailsRoute}) {
    const { id } = route.params

    const { data, isLoading, error } = getCarDetails(id)

    // Fontes
    const [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic
    });

    if (isLoading) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )
    }

    // Mensagem genérica de erro — evita expor detalhes da resposta da API ou erros internos ao usuário
    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#171818' }}>
                <Text style={{ color: '#888', fontSize: 14 }}>Não foi possível carregar os detalhes.</Text>
            </View>
        )
    }

    if (!fontsLoaded) {
        return null;
    }    

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.header_title}>VEÍCULO |</Text>
                    <Text style={styles.header_text}>{data?.make ?? "Não Disponível"}</Text>
                    <Text style={styles.header_text}>{data?.model ?? "Não Disponível"}</Text>
                </View>
                <View style={styles.TypeNTrim}>
                    <Text style={styles.header_text}>Versão: {data?.trim ?? "Não Disponível"}</Text>
                    <Text style={styles.header_text}>Tipo: {data?.type ?? "Não Disponível"}</Text>
                </View>
            </View>
            
            <ImageBackground
                source={require('../assets/DT_DESEMPENHO.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.card}>
                    <Text style={styles.texts}>Motor: {data?.motor ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Potência: {data?.potencia ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Torque: {data?.torqueMax ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>0 a 100/h: {data?.zeroACem ?? "Não Disponível"}</Text>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../assets/DT_MECANICA.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.card}>
                    <Text style={styles.texts}>Transmissão: {data?.transmissao ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Tração: {data?.tracao ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Amortecedores: {data?.amortecedores ?? "Não Disponível"}</Text>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../assets/DT_CONFIGURACOES.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.card}>
                    <Text style={styles.texts}>Modos de Condução: {data?.modosConducao ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Modos de Volante: {data?.modosVolante ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Modos de Escapamento: {data?.modosEscapamento ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Modos de Amortecedor: {data?.modosAmortecedor ?? "Não Disponível"}</Text>
                </View>
            </ImageBackground>

            <ImageBackground
                source={require('../assets/DT_OUTROS.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.card}>
                    <Text style={styles.texts}>Faróis: {data?.farois ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Rodas e Pneus: {data?.rodasPneus ?? "Não Disponível"}</Text>
                    <Text style={styles.texts}>Preço: {data?.preco ?? "Não Disponível"}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171818',

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        gap: 3
    },
    header_title: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'Montserrat_700Bold',

    },
    header_text: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Montserrat_500Medium'

    },
    TypeNTrim: {
        flexDirection: 'row',
        gap: 10,
        paddingBottom: 15,
    },
    card: {
        height: 120,
        justifyContent: 'center',
        paddingTop: 10
    },
    background: {
        width: 360,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    texts: {
        color: '#fff',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 12
    },
    h1:{
        fontSize: 22,
        fontFamily: 'Montserrat_700Bold_Italic',
        color: '#056aee'
    }
});