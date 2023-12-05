package proj.ifpb.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/quem-somos")
    public String quemSomos() {
        return "Alunos Isaac e JP";
    }
}
