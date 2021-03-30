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

import com.infocity.api.model.Usuario;
import com.infocity.api.service.UsuarioService;


@Controller
@RequestMapping("/usuarios")
public class UsuarioController {
	private final Logger log = LoggerFactory.getLogger(UsuarioService.class);

	private final UsuarioService usuarioService;

	public UsuarioController(UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}

	@GetMapping("/")
	@ResponseBody
	public List<Usuario> listarUsuarios() {
		return usuarioService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Usuario> getUsuario(@PathVariable int id) {
		log.debug("REST request to get Tipo : {}", id);
		Usuario usuario = usuarioService.findOne(id);
		if (usuario != null) {
			return ResponseEntity.ok().body(usuario);
		} else {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PostMapping("/")
	public ResponseEntity<Usuario> criarUsuario(@Valid @RequestBody Usuario usuario) throws URISyntaxException {
		log.debug("REST request to save Tipo : {}", usuario);
		if (usuario.getId() != 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Uma novo usuario não pode ter um ID");
		}
		Usuario result = usuarioService.save(usuario);
		return ResponseEntity.ok().body(result);
	}

	@PutMapping("/")
	public ResponseEntity<Usuario> atualizarUsuario(@Valid @RequestBody Usuario usuario) throws URISyntaxException {
		log.debug("REST request to update usuario : {}", usuario);
		if (usuario.getId() == 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid usuario id null");
		}
		Usuario result = usuarioService.update(usuario);
		return ResponseEntity.ok().body(result);
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluirIsuario (int id) {
		usuarioService.delete(id);
		return ResponseEntity.noContent().build();
	}

}
