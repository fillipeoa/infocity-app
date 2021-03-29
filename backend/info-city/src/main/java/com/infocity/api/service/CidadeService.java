package com.infocity.api.service;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.infocity.api.model.Cidade;
import com.infocity.api.repository.CidadeRepository;


@Service
public class CidadeService {
	private final Logger log = LoggerFactory.getLogger(CidadeService.class);
	private final CidadeRepository  cidadeRepository;

	public CidadeService(CidadeRepository  cidadeRepository) {
		this.cidadeRepository =  cidadeRepository;
	}
	
	public List<Cidade> findAll(){
        return  cidadeRepository.findAll();
    }
	
	public Cidade save(Cidade cidade) {
		log.debug("Request to save  cidade : {}",  cidade);
		cidade =  cidadeRepository.save( cidade);
		return cidade;
	}
	
	public Cidade update(Cidade  cidade) {
		log.debug("Request to save  cidade : {}",  cidade);
		cidade =  cidadeRepository.save( cidade);
		return cidade;
	}
	
	
	public Cidade findOne(int id) {
		return  cidadeRepository.findById(id);
	}
	
	public void delete(int id) {
		 cidadeRepository.deleteById(id);
	}
}
