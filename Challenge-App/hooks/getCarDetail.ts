import type { CarDetailsDTO } from "../interface/CarDetailsDTO";
import axios from 'axios';
import {useQuery} from "@tanstack/react-query"

const API_URL = "http://10.0.2.2:8080/cars"

const fetchCarDetails = async (id: number): Promise<CarDetailsDTO> => {
    const response = await axios.get<CarDetailsDTO>(`${API_URL}/${id}`);
    return response.data;
}

export function getCarDetails(id: number){

    return useQuery({
        queryFn: () => fetchCarDetails(id),
        queryKey: ["car-details", id],
        enabled: !!id,
        retry: 2
    });
}