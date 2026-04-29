package com.example.ChallengeFord.Controller;

import com.example.ChallengeFord.Model.CarDetailsDTO;
import com.example.ChallengeFord.Model.CarFilterDTO;
import com.example.ChallengeFord.Model.CarTruckResponse;
import com.example.ChallengeFord.Service.CarApiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cars")
public class CarApiController {
    private CarApiService service;

    public CarApiController(CarApiService service){
        this.service = service;
    }

    @GetMapping
    public CarTruckResponse getAll(
            CarFilterDTO filter,
            @RequestParam(defaultValue = "1") int page)
    {
        if (page < 1) { page = 1; }

        return service.getAll(filter, page);
    }

    @GetMapping("/{id}")
    public CarDetailsDTO getCarDetails(@PathVariable String id){
        return service.getCarDetails(id);
    }
}
