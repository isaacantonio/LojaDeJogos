package proj.ifpb.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import proj.ifpb.api.model.Role;
import proj.ifpb.api.model.Usuario;
import proj.ifpb.api.service.UsuarioService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/todos")
    public ResponseEntity<List<Usuario>> listarTodosUsuarios() {
        List<Usuario> usuarios = usuarioService.listarTodos();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarUsuarioPorId(@PathVariable Long id) {
        Usuario usuario = usuarioService.buscarPorId(id);
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/registro")
    public ResponseEntity<String> registrarUsuario(@RequestBody Usuario usuario) {
        // Registre o usuário
        usuarioService.registrarUsuario(usuario.getNome(), usuario.getEmail(),
                usuario.getSenha(), usuario.getRoles());

        return ResponseEntity.ok("Usuário registrado com sucesso!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> realizarLogin(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioOptional = usuarioService.buscarPorEmail(usuario.getEmail());

        if (usuarioOptional.isPresent()) {
            Usuario storedUsuario = usuarioOptional.get();

            if (storedUsuario.getSenha().equals(usuario.getSenha())) {

                boolean isAdmin = storedUsuario.getRoles().stream().anyMatch(role -> role == Role.ADMINISTRADOR);

                String papel = isAdmin ? "administrador" : "cliente";

                return ResponseEntity.ok(papel.toUpperCase());
            } else {
                return ResponseEntity.badRequest().body("Senha incorreta");
            }
        } else {
            return ResponseEntity.badRequest().body("Usuário não encontrado");
        }
    }
}
