package com.infocity.api.webrest;

import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import com.infocity.api.model.Colaboracao;
import com.infocity.api.model.Situacao;
import com.infocity.api.service.SituacaoService;
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
@RequestMapping("/situacoes")
public class SituacaoController {

    private final Logger log = LoggerFactory.getLogger(CidadeService.class);

    private final SituacaoService situacaoService;

    public SituacaoController(SituacaoService situacaoService) {
        this.situacaoService = situacaoService;
    }

    @GetMapping("/")
    @ResponseBody
    public List<Situacao> listarSituacoes() {
        return situacaoService.findAll();
    }

    @GetMapping("/colaboracao/{id}")
    public ResponseEntity<List<Situacao>> getSituacoesByColaboracao(@PathVariable int id){
        log.debug("REST request to get Colaboracao By id do Usuario : {}", id);

        List<Situacao> situacoes = situacaoService.findAllByColaboracaoId(id);
        if(situacoes.size() > 0) {
            return ResponseEntity.ok().body(situacoes);
        }else{
            return ResponseEntity.noContent().build();
        }

    }

}
