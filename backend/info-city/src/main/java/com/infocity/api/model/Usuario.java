package com.infocity.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "tbusuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "nome")
	@Length(min = 5, message = "*Seu Nome de Usuário deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite um Nome de Usuário")
	private String nome;
	
	@Column(name = "email")
	@Email(message = "*Por favor digite um email válido")
	@NotEmpty(message = "*Por favor digite um email")
	private String email;
	
	@Column(name = "password")
    @Length(min = 5, message = "*Sua password deve ter mais de 5 characteres")
    @NotEmpty(message = "*Por favor digite sua password")
	private String password;
	
	@Column(name = "foto")
	private String foto;
	
	
}
