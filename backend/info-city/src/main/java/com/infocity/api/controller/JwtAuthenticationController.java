package com.infocity.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.infocity.api.config.JwtTokenUtil;
import com.infocity.api.model.JwtRequest;
import com.infocity.api.model.JwtResponse;
import com.infocity.api.model.Usuario;
import com.infocity.api.service.JwtUserDetailsService;
import com.infocity.api.service.UsuarioService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
	
	private final UsuarioService usuarioService;

	public JwtAuthenticationController(UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
    
    @RequestMapping(value = "/getUsuarioLogin", method = RequestMethod.GET)
	public Usuario login(String username, String password) throws Exception {
		authenticate(username, password);
		final UserDetails userDetails = userDetailsService.loadUserByUsername(username);
		Usuario user = usuarioService.findUserByEmail(userDetails.getUsername());
		return user;
	}

   
}
