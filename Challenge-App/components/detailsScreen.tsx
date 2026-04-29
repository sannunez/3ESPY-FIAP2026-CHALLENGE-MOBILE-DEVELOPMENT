import {Text, View} from "react-native"
import { RootStackParamList } from "../navigation/types"
import { RouteProp } from "@react-navigation/native";

type DetailsRoute = RouteProp<RootStackParamList, "Details">;

export default function Details({route, }: {route: DetailsRoute}){
    const {id} = route.params
    return(
        <Text>{id}</Text>
    )
}