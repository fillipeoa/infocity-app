package com.infocity.api.webrest;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

import javax.validation.Valid;

import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

import com.infocity.api.model.Colaboracao;
import com.infocity.api.repository.ColaboracaoRepository;
import com.infocity.api.service.ColaboracaoService;


@Controller
@RequestMapping("/colaboracoes")
public class ColaboracaoController {

	private final Logger log = LoggerFactory.getLogger(ColaboracaoService.class);

	private final ColaboracaoService colaboracaoService;

	public ColaboracaoController(ColaboracaoService colaboracaoService) {
		this.colaboracaoService = colaboracaoService;
	}

	@GetMapping("/")
	@ResponseBody
	public List<Colaboracao> listarColaboracaos() {
		return colaboracaoService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Colaboracao> getColaboracao(@PathVariable int id) {
		log.debug("REST request to get Tipo : {}", id);
		Colaboracao colaboracao = colaboracaoService.findOne(id);
		if (colaboracao != null) {
			return ResponseEntity.ok().body(colaboracao);
		} else {
			return ResponseEntity.notFound().build();
		}

	}
	
	@GetMapping("/usuario/{id}")
    public ResponseEntity<List<Colaboracao>> getColaboracaosByUsuario(@PathVariable int id){
        log.debug("REST request to get Colaboracao By id do Usuario : {}", id);

        List<Colaboracao> colaboracoes = colaboracaoService.findAllByUsuarioId(id);
        if(colaboracoes.size() > 0) {
            return ResponseEntity.ok().body(colaboracoes);
        }else{
            return ResponseEntity.noContent().build();
        }

    }
	
	@GetMapping("/cidade/{id}")
    public ResponseEntity<List<Colaboracao>> getColaboracaosByCidade(@PathVariable int id){
        log.debug("REST request to get Colaboracao By id da cidade : {}", id);
        List<Colaboracao> colaboracoes = colaboracaoService.findAllByCidadeId(id);
        if(colaboracoes.size() > 0) {
            return ResponseEntity.ok().body(colaboracoes);
        }else{
            return ResponseEntity.noContent().build();
        }

    }

	@PostMapping("/")
	public ResponseEntity<Colaboracao> criarColaboracao(@Valid @RequestBody Colaboracao colaboracao) throws Exception {
		Colaboracao result = colaboracaoService.save(colaboracao);
		return ResponseEntity.ok().body(result);
	}

	@PutMapping("/")
	public ResponseEntity<Colaboracao> atualizarColaboracao(@Valid @RequestBody Colaboracao colaboracao) throws URISyntaxException {
		log.debug("REST request to update Colaboracao : {}", colaboracao);
		if (colaboracao.getId() == 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Colaboracao id null");
		}
		Colaboracao result = colaboracaoService.update(colaboracao);
		return ResponseEntity.ok().body(result);
	}


	@DeleteMapping("/{id}")
	public ResponseEntity<Void> excluirColaboracao (int id) {
		colaboracaoService.delete(id);
		return ResponseEntity.noContent().build();
	}
}
