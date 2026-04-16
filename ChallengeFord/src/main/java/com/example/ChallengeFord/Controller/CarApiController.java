package com.example.ChallengeFord.Controller;

import com.example.ChallengeFord.Model.CarFilterDTO;
import com.example.ChallengeFord.Model.CarTruckDTO;
import com.example.ChallengeFord.Service.CarApiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("cars")
public class CarApiController {
    private CarApiService service;

    public CarApiController(CarApiService service){
        this.service = service;
    }

    @GetMapping
    public List<CarTruckDTO> getAll(
            CarFilterDTO filter,
            @RequestParam(defaultValue = "1") int page)
    {
        if (page < 1) {page = 1;}

        return service.getAll(filter, page);
    }
//
//    @GetMapping("/makes")
//    public List<String> getMakes(){
//        return service.getAvailableMakes();
//    }

}
