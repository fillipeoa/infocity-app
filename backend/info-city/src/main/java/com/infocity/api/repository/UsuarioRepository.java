package com.infocity.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infocity.api.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	
	Usuario findById(int id);
	Usuario findByUserName(String userName);
	Usuario findByEmail(String email);
}
