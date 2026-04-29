package com.example.ChallengeFord.Model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CarDetailsResponse {

    // Identificação
    private String make;
    private String model;
    private String trim;
    private String type;

    // Motor / performance
    private List<Engine> engines;

    // Carroceria
    private List<Body> bodies;

    // preço
    private Integer msrp;

    // Classe Internas =>
    @Getter
    @Setter
    public static class Engine {

        private String engineType;
        private Double size;
        private String cylinders;

        private Integer horsepowerHp;
        private Integer torqueFtLbs;

        private String transmission;
        private String driveType;
    }

    @Getter
    @Setter
    public static class Body {

        private String type;
    }
}



