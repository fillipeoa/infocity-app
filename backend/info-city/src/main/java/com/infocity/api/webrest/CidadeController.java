package com.infocity.api.webrest;

import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.infocity.api.model.Cidade;
import com.infocity.api.service.CidadeService;

@Controller
@RequestMapping("/cidades")
public class CidadeController {
	
	private final Logger log = LoggerFactory.getLogger(CidadeService.class);

	private final CidadeService cidadeService;

	public CidadeController(CidadeService cidadeService) {
		this.cidadeService = cidadeService;
	}

	@GetMapping("/")
	@ResponseBody
	public List<Cidade> listarCidades() {
		return cidadeService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Cidade> getCidade(@PathVariable int id) {
		log.debug("REST request to get Tipo : {}", id);
		Cidade cidade = cidadeService.findOne(id);
		if (cidade != null) {
			return ResponseEntity.ok().body(cidade);
		} else {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping("/")
	public ResponseEntity<Cidade> criarCidade(@Valid @RequestBody Cidade cidade) throws URISyntaxException {
		log.debug("REST request to save Tipo : {}", cidade);
		if (cidade.getId() != 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Uma nova egoria não pode terum ID");
		}
		Cidade result = cidadeService.save(cidade);
		return ResponseEntity.ok().body(result);
	}

	@PutMapping("/")
	public ResponseEntity<Cidade> atualizarCidade(@Valid @RequestBody Cidade cidade) throws URISyntaxException {
		log.debug("REST request to update cidade : {}", cidade);
		if (cidade.getId() == 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid cidade id null");
		}
		Cidade result = cidadeService.update(cidade);
		return ResponseEntity.ok().body(result);
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluirCidade (int id) {
		cidadeService.delete(id);
		return ResponseEntity.noContent().build();
	}

}
