package com.example.ChallengeFord.Service;

import com.example.ChallengeFord.Client.CarApiClient;
import com.example.ChallengeFord.Model.CarFilterDTO;
import com.example.ChallengeFord.Model.CarTruckDTO;
import com.example.ChallengeFord.Model.CarTruckResponse;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarApiService {
    private CarApiClient client;

    public CarApiService(CarApiClient client){
        this.client = client;
    }

    public List<CarTruckDTO> getAll(CarFilterDTO filter, int page){
        return client.getTruck(filter, page);

    }

//    @Cacheable("makes")
//    public List<String> getAvailableMakes(){
//
//        List<String> makes = new ArrayList<>();
//
//        int currentPage = 1;
//        int totalPages;
//
//        do {
//            CarTruckResponse response = client.getTruckPage(currentPage);
//
//            response.getData().forEach(car -> {
//                if (car.getMake() != null && !car.getMake().isBlank()) {
//                    makes.add(car.getMake());
//                }
//            });
//
//            totalPages = response.getCollection().getPages();
//            currentPage++;
//
//            System.out.println("Buscando página: " + currentPage);
//
//
//        } while (currentPage <= totalPages);
//
//        return makes.stream().distinct().sorted().toList();
//    }


}
