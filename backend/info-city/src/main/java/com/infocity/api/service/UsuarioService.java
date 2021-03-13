package com.infocity.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infocity.api.model.Usuario;
import com.infocity.api.repository.UsuarioRepository;


@Service
public class UsuarioService {

	private final UsuarioRepository usuarioRepository;
	
	@Autowired
	public UsuarioService(UsuarioRepository usuarioRepository){
		this.usuarioRepository = usuarioRepository;
	}
	
	public Usuario findUserByNome(String name) {
		return usuarioRepository.findByNome(name);
	}

	public Usuario findUserByUserName(String userName) {
		return usuarioRepository.findByUserName(userName);
	}
}
