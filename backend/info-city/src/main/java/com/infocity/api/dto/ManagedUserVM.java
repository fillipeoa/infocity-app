package com.infocity.api.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
public class ManagedUserVM {

    public static final int PASSWORD_MIN_LENGTH = 4;

    public static final int PASSWORD_MAX_LENGTH = 100;

    @Length(min = 5, message = "*Seu Nome de Usuário deve ter pelo menos 5 characteres")
    @NotEmpty(message = "*Por favor digite um Nome de Usuário")
    private String userName;

    @Email(message = "*Por favor digite um email válido")
    @NotEmpty(message = "*Por favor digite um email")
    private String email;

    @Column(name = "name")
    @NotEmpty(message = "*Por favor digite seu nome")
    private String name;

    @Column(name = "last_name")
    @NotEmpty(message = "*Por favor digite seu sobrenome")
    private String lastName;

    @Size(min = PASSWORD_MIN_LENGTH, max = PASSWORD_MAX_LENGTH, message = "*Sua password deve ter mais de 5 characteres")
    @NotEmpty(message = "*Por favor digite sua password")
    private String password;

}
