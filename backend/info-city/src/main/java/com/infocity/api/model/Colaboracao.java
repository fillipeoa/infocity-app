package com.infocity.api.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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

	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	
	@Column(name = "titulo", nullable = false)
	@Length(min = 5, message = "*Seu título deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite um título")
	private String titulo;
	
	@Column(name = "descricao", nullable = false)
	@Length(min = 5, message = "*Sea descrição deve ter pelo menos 5 characteres")
	@NotEmpty(message = "*Por favor digite uma descrição ")
	private String descricao;
	
	@Column(name = "latitude", nullable = false)
	private Double latitude;
	
	@Column(name = "longitude", nullable = false)
	private Double longitude;
	
	@Column(name = "rua", nullable = false)
	@Length(min = 3, message = "*A rua deve ter pelo menos 3 characteres")
	@NotEmpty(message = "*Por favor digite uma rua")
	private String rua;
	
	@Column(name = "numero", nullable = false)
	@NotEmpty(message = "*Por favor digite um número")
	private String numero;
	
	@Column(name = "bairro", nullable = false)
	@Length(min = 3, message = "*O bairro deve ter pelo menos 3 characteres")
	@NotEmpty(message = "*Por favor digite um bairro")
	private String bairro;
	
	@Column(name = "complemento")
	private String complemento;

	@ManyToOne
	@JoinColumn(name = "cidade_id")
	private Cidade cidade;
	
	@Column(name = "flagSituacao", nullable = false)
	private int flagSituacao;

	@Column(name = "avaliacao")
	private int avaliacao;
	
	@Column(name = "created_at", nullable = false)
	private Date created_at;
	
	@Column(name = "updated_at", nullable = false)
	private Date updated_at;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitide) {
		this.latitude = latitide;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public Cidade getCidade() {
		return cidade;
	}

	public void setCidade(Cidade cidade) {
		this.cidade = cidade;
	}

	public int getFlagSituacao() {
		return flagSituacao;
	}

	public void setFlagSituacao(int flagSituacao) {
		this.flagSituacao = flagSituacao;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public int getAvaliacao() {
		return avaliacao;
	}

	public void setAvaliacao(int avaliacao) {
		this.avaliacao = avaliacao;
	}
	
	
	
	
	
	
}
