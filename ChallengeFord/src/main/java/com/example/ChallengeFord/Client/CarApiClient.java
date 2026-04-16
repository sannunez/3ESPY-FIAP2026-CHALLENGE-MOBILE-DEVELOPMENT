package com.example.ChallengeFord.Client;

import com.example.ChallengeFord.Model.CarFilterDTO;
import com.example.ChallengeFord.Model.CarTruckDTO;
import com.example.ChallengeFord.Model.CarTruckResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
public class CarApiClient {
    RestTemplate restTemplate = new RestTemplate();

    String BASE_URL = "https://carapi.app/api/bodies/v2?type=truck";

    public List<CarTruckDTO> getTruck(CarFilterDTO filter, int page){

        StringBuilder url = new StringBuilder(BASE_URL);

        url.append("&page=").append(page);

        if (filter.getMake() != null) {
            url.append("&make=").append(filter.getMake());
        }

        if (filter.getModel() != null) {
            url.append("&model=").append(filter.getModel());
        }

        if (filter.getTrim() != null){
            url.append("&trim=").append(filter.getTrim());
        }

        CarTruckResponse response = restTemplate.getForObject(url.toString(), CarTruckResponse.class);
        return response.getData();
    }

    public CarTruckResponse getTruckPage(int page){

        String url = BASE_URL + "&page=" + page;

        CarTruckResponse response =
                restTemplate.getForObject(url, CarTruckResponse.class);

        if (response == null) {
            return new CarTruckResponse();
        }

        return response;
    }
}
