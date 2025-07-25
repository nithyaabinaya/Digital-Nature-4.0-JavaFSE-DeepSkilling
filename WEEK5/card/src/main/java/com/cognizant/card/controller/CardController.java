package com.cognizant.card.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/cards")
public class CardController {

    @GetMapping("/{number}")
    public Map<String, Object> getCardDetails(@PathVariable String number) {
        return Map.of(
            "number", number,
            "type", "credit",
            "limit", 150000,
            "balance", 47000,
            "expiry", "11/27"
        );
    }
}