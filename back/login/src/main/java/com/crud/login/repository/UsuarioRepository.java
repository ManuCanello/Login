package com.crud.login.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crud.login.model.Usuario;
@Repository
public interface  UsuarioRepository extends CrudRepository<Usuario, Integer>{
}
