package com.infocity.api.service;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infocity.api.model.Colaboracao;
import com.infocity.api.repository.ColaboracaoRepository;


@Service
public class ColaboracaoService {
	private final Logger log = LoggerFactory.getLogger( ColaboracaoService.class);
	private final  ColaboracaoRepository  colaboracaoRepository;

	public  ColaboracaoService( ColaboracaoRepository  colaboracaoRepository) {
		this.colaboracaoRepository =  colaboracaoRepository;
	}
	
	public List<Colaboracao> findAll(){
        return  colaboracaoRepository.findAll();
    }
	
	public List<Colaboracao> findAllByUsuarioId(int id){
		return colaboracaoRepository.findAllByUsuarioId(id);
	}
	
	public List<Colaboracao> findAllByCidadeId(int id){
		return colaboracaoRepository.findAllByCidadeId(id);
	}

	public Colaboracao save(Colaboracao  colaboracao) {
		log.debug("Request to save  colaboracao : {}",  colaboracao);
		Date date = new Date();
		colaboracao.setCreated_at(date);
		colaboracao.setUpdated_at(date);
		
		colaboracao =  colaboracaoRepository.save(colaboracao);
		return colaboracao;
	}
	
	public Colaboracao update(Colaboracao  colaboracao) {
		log.debug("Request to save  colaboracao : {}",  colaboracao);
		Date date = new Date();
		colaboracao.setCreated_at(colaboracaoRepository.findById(colaboracao.getId()).getCreated_at());
		colaboracao.setUpdated_at(date);
		colaboracao =  colaboracaoRepository.save( colaboracao);
		return colaboracao;
	}
	
	
	public Colaboracao findOne(int id) {
		return colaboracaoRepository.findById(id);
	}
	
	public void delete(int id) {
		 colaboracaoRepository.deleteById(id);
	}
}
