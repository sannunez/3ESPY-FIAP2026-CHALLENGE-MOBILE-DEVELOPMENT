
import {Text, View} from "react-native"
import { RootStackParamList } from "../navigation/types"
import { RouteProp } from "@react-navigation/native";
import { getCarDetails } from "../hooks/getCarDetail";

type DetailsRoute = RouteProp<RootStackParamList, "Details">;

export default function Details({route, }: {route: DetailsRoute}){
    const {id} = route.params
    const {data} = getCarDetails(id)
    
    return(
        <View>
            {/* Dados presentes no DataSet */}
            <Text>{data?.make}</Text>
            <Text>{data?.model}</Text>
            <Text>{data?.trim}</Text>
            <Text>{data?.type}</Text>
            <Text>{data?.motor}</Text>
            <Text>{data?.potencia}</Text>
            <Text>{data?.torqueMax}</Text>
            <Text>{data?.tracao}</Text>
            <Text>{data?.preco}</Text>

            {/* Dados não Presentes na API*/}
            <Text>{data?.zeroACem}</Text>
            <Text>{data?.amortecedores}</Text>
            <Text>{data?.modosAmortecedor}</Text>
            <Text>{data?.modosConducao}</Text>
            <Text>{data?.modosVolante}</Text>
            <Text>{data?.modosEscapamento}</Text>
            <Text>{data?.farois}</Text>
            <Text>{data?.rodasPneus}</Text>

            <Text>{id}</Text>
        </View>
    )
}