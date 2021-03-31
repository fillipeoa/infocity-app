package com.infocity.api.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infocity.api.model.Colaboracao;

@Repository
public interface ColaboracaoRepository extends JpaRepository<Colaboracao, Integer> {
	Colaboracao findById(int id);
	List<Colaboracao> findAllByUsuarioId(int id);
	List<Colaboracao> findAllByCidadeId(int id);
 }
