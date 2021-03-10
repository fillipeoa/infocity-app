package com.infocity.api.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
@Entity(name = "tbcolaboracao")
public class Colaboracao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private int id;
	
	//@ManyToOne(fetch = FetchType.EAGER)
	private int idUsuario;
	
	@Column(name = "titulo", nullable = false)
	@Length(min = 5, message = "*Seu título deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite um título")
	private String titulo;
	
	@Column(name = "descricao", nullable = false)
	@Length(min = 5, message = "*Sea descrição deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite uma descrição ")
	private String descricao;
	
	@Column(name = "dataRegistro", nullable = false)
	private Date dataRegistro;
	
	@Column(name = "latitude", nullable = false)
	private Double latitide;
	
	@Column(name = "longitude", nullable = false)
	private Double longitude;
	
	@Column(name = "rua", nullable = false)
	@Length(min = 5, message = "*A rua deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite uma rua")
	private String rua;
	
	@Column(name = "numero", nullable = false)
	@NotEmpty(message = "*Por favor digite um número")
	private String numero;
	
	@Column(name = "bairro", nullable = false)
	@Length(min = 5, message = "*O bairro deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite um bairro")
	private String bairro;
	
	@Column(name = "complemento", nullable = false)
	@Length(min = 5, message = "*O complemento deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite um complemento")
	private String complemento;
	
	@Column(name = "cidade", nullable = false)
	@Length(min = 5, message = "*A cidade deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite uma cidade")
	private String cidade;
	
	@Column(name = "flagSituacao", nullable = false)
	private int flagSituacao;
	
	@Column(name = "created_at", nullable = false)
	private Date created_at;
	
	@Column(name = "updated_at", nullable = false)
	private Date updated_at;
	
}
