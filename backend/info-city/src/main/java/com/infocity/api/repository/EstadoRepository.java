package com.infocity.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infocity.api.model.Estado;

@Repository
public interface EstadoRepository extends JpaRepository<Estado, Integer> {
	Estado findById(int id);
}
