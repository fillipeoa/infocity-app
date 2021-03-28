package com.infocity.api.webrest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.infocity.api.model.Usuario;

@Controller
public class LoginController {
	
	@GetMapping(value={"/", "/login"})
    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }
	
	@GetMapping("/registration")
    public ModelAndView registration(){
        ModelAndView modelAndView = new ModelAndView();
        Usuario user = new Usuario();
        user.setNome("Meu Nome");
        modelAndView.addObject("user", user);
        modelAndView.setViewName("registration");
        return modelAndView;
    }



}
