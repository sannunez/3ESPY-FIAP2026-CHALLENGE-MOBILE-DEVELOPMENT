import type {CarTruckResponse} from "../interface/CarTruckResponse";
import axios from 'axios';
import {useQuery} from "@tanstack/react-query"

const API_URL = "http://10.0.2.2:8080/cars"

const fetchCars = async (filter?: string): Promise<CarTruckResponse> => {
    
    const url = filter
    ? `${API_URL}${filter}`
    : API_URL
    
    const response = await axios.get<CarTruckResponse>(url);
    return response.data;
}

export function getCarTruck(filter?: string){

    return useQuery({
        queryFn: () => fetchCars(filter),
        queryKey: ['car-data', filter],
        retry: 2
    })

}
