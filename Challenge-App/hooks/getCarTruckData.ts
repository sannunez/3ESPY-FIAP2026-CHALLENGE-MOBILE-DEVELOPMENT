import type {CarTruckResponse} from "../interface/CarTruckResponse";
import axios from 'axios';
import {useQuery} from "@tanstack/react-query"

const API_URL = "http://10.0.2.2:8080/cars"

const fetchCars = async (): Promise<CarTruckResponse> => {
    const response = await axios.get<CarTruckResponse>(API_URL);
    return response.data;
}

export function getCarTruck(){

    return useQuery({
        queryFn: fetchCars,
        queryKey: ['car-data'],
        retry: 2
    })

}
