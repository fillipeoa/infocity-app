package com.infocity.api.webrest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.infocity.api.model.Colaboracao;
import com.infocity.api.repository.ColaboracaoRepository;

@Controller
public class ColaboracaoController {

	@Autowired
	private ColaboracaoRepository colaboracaoRepository;
	
	@RequestMapping("/colaboracoes")  
    @ResponseBody  
    public List<Colaboracao> listarUsuarios(){
        	return colaboracaoRepository.findAll();
    };
}
