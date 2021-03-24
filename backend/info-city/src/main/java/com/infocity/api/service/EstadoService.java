package com.infocity.api.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.infocity.api.model.Estado;
import com.infocity.api.repository.EstadoRepository;

@Service
public class EstadoService {
	private final Logger log = LoggerFactory.getLogger(EstadoService.class);
	private final EstadoRepository  estadoRepository;

	public EstadoService(EstadoRepository  estadoRepository) {
		this.estadoRepository =  estadoRepository;
	}
	
	public List<Estado> findAll(){
        return  estadoRepository.findAll();
    }
	
	public Estado save(Estado estado) {
		log.debug("Request to save  estado : {}",  estado);
		estado =  estadoRepository.save( estado);
		return estado;
	}
	
	public Estado update(Estado  estado) {
		log.debug("Request to save  estado : {}",  estado);
		estado =  estadoRepository.save( estado);
		return estado;
	}
	
	
	public Estado findOne(int id) {
		return  estadoRepository.findById(id);
	}
	
	public void delete(int id) {
		 estadoRepository.deleteById(id);
	}
}
