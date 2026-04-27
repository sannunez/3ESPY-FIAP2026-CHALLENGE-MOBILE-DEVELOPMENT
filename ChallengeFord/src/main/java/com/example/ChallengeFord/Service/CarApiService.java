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

    public CarTruckResponse getAll(CarFilterDTO filter, int page){
        return client.getTruckPageWithFilter(filter, page);
    }



}
