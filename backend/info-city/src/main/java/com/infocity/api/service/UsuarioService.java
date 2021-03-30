package com.infocity.api.service;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.infocity.api.model.Usuario;
import com.infocity.api.repository.UsuarioRepository;


@Service
public class UsuarioService {

	private final Logger log = LoggerFactory.getLogger(UsuarioService.class);
	private final UsuarioRepository  usuarioRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	public  UsuarioService(UsuarioRepository  usuarioRepository) {
		this.usuarioRepository =  usuarioRepository;
		this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
	}
	
	public List<Usuario> findAll(){
        return  usuarioRepository.findAll();
    }
	
	 public Usuario findUserByUserName(String userName) {
		 return usuarioRepository.findByUserName(userName);
	 }
	 
	 public Usuario findUserByEmail(String email) {
		 return usuarioRepository.findByEmail(email);
	 }
	
	public Usuario save(Usuario  usuario) {
		log.debug("Request to save  usuario : {}",  usuario);
		Date date = new Date();
		usuario.setCreated_at(date);
		usuario.setUpdated_at(date);
		usuario.setPassword(this.bCryptPasswordEncoder.encode(usuario.getPassword()));
		usuario =  usuarioRepository.save( usuario);
		return usuario;
	}
	
	public Usuario update(Usuario  usuario) {
		log.debug("Request to save  usuario : {}",  usuario);
		Date date = new Date();
		usuario.setCreated_at(usuarioRepository.findById(usuario.getId()).getCreated_at());
		usuario.setUpdated_at(date);
		usuario =  usuarioRepository.save( usuario);
		return usuario;
	}

	Usuario getByEmail(String email){
		return usuarioRepository.findByEmail(email);
	}
	
	public Usuario findOne(int id) {
		return  usuarioRepository.findById(id);
	}
	
	public void delete(int id) {
		 usuarioRepository.deleteById(id);
	}
}
