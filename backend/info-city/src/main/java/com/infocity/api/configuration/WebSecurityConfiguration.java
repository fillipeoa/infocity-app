package com.infocity.api.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.infocity.api.service.MyUserDetailsService;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
	//@Autowired
	//private JwtAuthenticationEntryPoint unauthorizedHandler;

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	public void configureAuthentication(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(this.userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	//@Bean
	//public JwtAuthenticationTokenFilter authenticationTokenFilterBean() throws Exception {
		//return new JwtAuthenticationTokenFilter();
	//}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		  http
          .authorizeRequests()
              .antMatchers("/").permitAll()
              .antMatchers("/public/**").permitAll()
              .antMatchers("/login").permitAll()
              .antMatchers("/authenticate").permitAll()
              .antMatchers("/register").permitAll()
              .antMatchers("/registration").permitAll()
              .antMatchers("/admin/**").hasAuthority("ADMIN")
              .anyRequest()
              .authenticated()
          .and()
              .csrf().disable()
              .formLogin()
              .loginPage("/login")
              .loginPage("/")
              .failureUrl("/login?error=true")
              .defaultSuccessUrl("/admin/home")
              .usernameParameter("user_name")
              .passwordParameter("password")
          .and()
              .logout()
              .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
              .logoutSuccessUrl("/login").and().exceptionHandling();
          //.and()
              //.apply(securityConfigurerAdapter());

	}

}
