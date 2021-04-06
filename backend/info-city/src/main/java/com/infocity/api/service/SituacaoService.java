package com.infocity.api.service;

import java.util.Date;
import java.util.List;

import com.infocity.api.model.Situacao;
import com.infocity.api.repository.SituacaoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infocity.api.model.Colaboracao;
import com.infocity.api.repository.ColaboracaoRepository;


@Service
public class SituacaoService {
    private final Logger log = LoggerFactory.getLogger( ColaboracaoService.class);
    private final SituacaoRepository situacaoRepository;

    public  SituacaoService( SituacaoRepository  situacaoRepository) {
        this.situacaoRepository =  situacaoRepository;
    }

    public List<Situacao> findAll(){
        return  situacaoRepository.findAll();
    }

    public List<Situacao> findAllByColaboracaoId(int id){
        return situacaoRepository.findAllByColaboracaoId(id);
    }
}
