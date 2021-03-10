package com.infocity.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infocity.api.repository.ColaboracaoRepository;

@Service
public class ColaboracaoService {
	private final ColaboracaoRepository colaboracaoRepository;
	
	@Autowired
	public ColaboracaoService(ColaboracaoRepository colaboracaoRepository){
		this.colaboracaoRepository = colaboracaoRepository;
	}
}
