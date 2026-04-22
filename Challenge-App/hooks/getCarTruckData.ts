import type {CarTruckResponse} from "../interface/CarTruckResponse";
import axios from 'axios';
import {useQuery} from "@tanstack/react-query"

const API_URL = "http://10.0.2.2:8080/cars"

const fetchCars = async (): Promise<CarTruckResponse> => {
    console.log("FETCH CHAMADO");

    const response = await axios.get<CarTruckResponse>(API_URL);

    console.log("RESPOSTA:", response.data);

    return response.data;
}

export function getCarTruck(){
    console.log("HOOK CHAMADO");

    return useQuery({
        queryFn: fetchCars,
        queryKey: ['car-data'],
        retry: 2
    })

}
