package com.example.snsdata.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@org.springframework.stereotype.Controller
public class Controller {

    @GetMapping("")
    public String index(){
        return "index";
    }

    @GetMapping("/facebook")
    public String facebook(){
        return "facebook";
    }

    @GetMapping("/instagram")
    public String instagram(){
        return "instagram";
    }

    @GetMapping("/youtube")
    public String youtube(){
        return "youtube";
    }
}
