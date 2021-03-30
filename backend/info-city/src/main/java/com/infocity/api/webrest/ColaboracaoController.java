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

	@PostMapping("/")
	public ResponseEntity<Colaboracao> criarColaboracao(@Valid @RequestBody Colaboracao colaboracao) throws Exception {
		log.debug("REST request to save Tipo : {}", colaboracao);
		if (colaboracao.getId() != 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Uma nova colaboracao não pode ter um ID");
		}
		var lat = this.getLat(this.getEnderecoCompleto(colaboracao));
		var lon = this.getLon(this.getEnderecoCompleto(colaboracao));

		Colaboracao result = colaboracaoService.save(colaboracao);
		return ResponseEntity.ok().body(result);
	}

	String getEnderecoCompleto(Colaboracao colaboracao){
		var str = "";
		str += colaboracao.getRua();
		str += ", ";
		str += colaboracao.getNumero();
		str += ", ";
		str += colaboracao.getBairro();

		return str;
	}

	public ResponseEntity<Object> getLat(String endereco) throws Exception {
		endereco = "Timoteo";

		endereco = endereco.replace(" ","+");

		var dados = this.getRemoteContents("https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q="+endereco+"&limit=1&email=fillipeoa@gmail.com");

		dados = dados.substring(1,dados.length());

		JSONObject jsonObject = new JSONObject(dados);

		return ResponseEntity.ok().body(jsonObject.get("lat"));
	}

	public ResponseEntity<Object> getLon(String endereco) throws Exception {
		endereco = endereco.replace(" ","+");

		var dados = this.getRemoteContents("https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q="+endereco+"&limit=1&email=fillipeoa@gmail.com");

		dados = dados.substring(1,dados.length());

		JSONObject jsonObject = new JSONObject(dados);

		return ResponseEntity.ok().body(jsonObject.get("lon"));
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

	@GetMapping("/latlong")
	public ResponseEntity<Object> getLatLong(String endereco) throws Exception {
		endereco = endereco.replace(" ","+");

		var dados = this.getRemoteContents("https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q="+endereco+"&limit=1&email=fillipeoa@gmail.com");

		dados = dados.substring(1,dados.length());

		JSONObject jsonObject = new JSONObject(dados);

		return ResponseEntity.ok().body(jsonObject);
	}

	public String getRemoteContents(String url) throws Exception {
		URL urlObject = new URL(url);
		URLConnection conn = urlObject.openConnection();
		BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		String inputLine, output = "";
		while ((inputLine = in.readLine()) != null) {
			output += inputLine;
		}
		in.close();

		return output;
	}



}
