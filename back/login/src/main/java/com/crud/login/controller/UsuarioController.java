package com.crud.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.login.model.Usuario;
import com.crud.login.repository.UsuarioRepository;

@RestController
@RequestMapping("/api")
public class UsuarioController {
    
    @Autowired
    public UsuarioRepository usuarioRepository;

    @GetMapping(value = "/usuario")
    public Iterable<Usuario> getAllUsuario(){
        return usuarioRepository.findAll();
    }

    @PostMapping(value = "/usuario/new") 
    public Usuario saveUsuario(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @DeleteMapping(value = "/usuario/delete/{id}")
    public void deleteUsuaio(@PathVariable Integer id){
        usuarioRepository.deleteById(id);

    }

    


}
