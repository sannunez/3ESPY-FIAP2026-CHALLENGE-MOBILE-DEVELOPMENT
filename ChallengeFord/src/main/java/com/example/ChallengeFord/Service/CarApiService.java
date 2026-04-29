package com.example.ChallengeFord.Service;

import com.example.ChallengeFord.Client.CarApiClient;
import com.example.ChallengeFord.Model.*;
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

    public CarDetailsDTO getCarDetails(String id){
        CarDetailsResponse response = client.getCarDetails(id);

        if(response == null){
            return new CarDetailsDTO();
        }

        return mapToDTO(response);
    }

    public CarDetailsDTO mapToDTO(CarDetailsResponse api) {

        CarDetailsDTO dto = new CarDetailsDTO();

        dto.setMake(api.getMake());
        dto.setModel(api.getModel());
        dto.setTrim(api.getTrim());
        dto.setType(api.getType());

        var engine = api.getEngines().get(0);

        dto.setMotor(
                engine.getEngineType() + " " +
                        engine.getSize() + "L " +
                        engine.getCylinders()
        );

        dto.setPotencia(engine.getHorsepowerHp());
        dto.setTorqueMax(engine.getTorqueFtLbs());

        dto.setTransmissao(engine.getTransmission());
        dto.setTracao(engine.getDriveType());

        dto.setPreco(api.getMsrp());

        dto.setZeroACem(null);
        dto.setAmortecedores(null);
        dto.setModosConducao(null);
        dto.setModosVolante(null);
        dto.setModosEscapamento(null);
        dto.setModosAmortecedor(null);
        dto.setFarois(null);
        dto.setRodasPneus(null);

        return dto;
    }

}
