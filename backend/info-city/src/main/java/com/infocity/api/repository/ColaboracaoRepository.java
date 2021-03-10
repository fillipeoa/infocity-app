package com.infocity.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infocity.api.model.Colaboracao;

@Repository
public interface ColaboracaoRepository extends JpaRepository<Colaboracao, Integer> {

}
