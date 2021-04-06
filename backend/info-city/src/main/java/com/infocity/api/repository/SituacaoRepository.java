package com.infocity.api.repository;

import java.util.List;

import com.infocity.api.model.Situacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SituacaoRepository extends JpaRepository<Situacao, Integer> {
    Situacao findById(int id);
    List<Situacao> findAllByColaboracaoId(int id);
    List<Situacao> findAll();

}
