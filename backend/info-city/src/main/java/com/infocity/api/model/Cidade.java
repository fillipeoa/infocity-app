package com.infocity.api.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;


@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "tbcidade")
public class Cidade {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private int id;
	
	@Column(name = "nome", nullable = false)
	@Length(min = 5, message = "*O nome da cidade deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite um Nome de Usuário")
	private String nome;
	
	@Column(name = "estado", nullable = false)
	@Length(min = 2, message = "*O nome do estado deve ter 2 characteres")
	@Length(max = 2, message = "*O nome do estado deve ter 2 characteres")
	@NotEmpty(message = "*Por favor digite um Nome de Usuário")
	private String estado;
	
	@OneToMany(mappedBy = "cidade", cascade = CascadeType.ALL)
	private List<Usuario> usuarios = new ArrayList<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	

}
