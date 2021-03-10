package com.infocity.api.webrest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.infocity.api.model.Usuario;
import com.infocity.api.repository.UsuarioRepository;


@Controller
public class UsuarioController {
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@RequestMapping("/usuarios")  
    @ResponseBody  
    public List<Usuario> listarUsuarios(){
        	return usuarioRepository.findAll();
    };
}
