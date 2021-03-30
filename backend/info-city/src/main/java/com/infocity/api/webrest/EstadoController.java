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

import com.infocity.api.model.Estado;
import com.infocity.api.service.EstadoService;


@Controller
@RequestMapping("/estados")
public class EstadoController {
	
	private final Logger log = LoggerFactory.getLogger(EstadoService.class);

	private final EstadoService estadoService;

	public EstadoController(EstadoService estadoService) {
		this.estadoService = estadoService;
	}

	@GetMapping("/")
	@ResponseBody
	public List<Estado> listarEstados() {
		return estadoService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Estado> getEstado(@PathVariable int id) {
		log.debug("REST request to get Tipo : {}", id);
		Estado estado = estadoService.findOne(id);
		if (estado != null) {
			return ResponseEntity.ok().body(estado);
		} else {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping("/")
	public ResponseEntity<Estado> criarEstado(@Valid @RequestBody Estado estado) throws URISyntaxException {
		log.debug("REST request to save Tipo : {}", estado);
		if (estado.getId() != 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Um novo estado não pode terum ID");
		}
		Estado result = estadoService.save(estado);
		return ResponseEntity.ok().body(result);
	}

	@PutMapping("/")
	public ResponseEntity<Estado> atualizarEstado(@Valid @RequestBody Estado estado) throws URISyntaxException {
		log.debug("REST request to update estado : {}", estado);
		if (estado.getId() == 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid estado id null");
		}
		Estado result = estadoService.update(estado);
		return ResponseEntity.ok().body(result);
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluirEstado (int id) {
		estadoService.delete(id);
		return ResponseEntity.noContent().build();
	}


}
