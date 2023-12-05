package proj.ifpb.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proj.ifpb.api.model.Usuario;
import proj.ifpb.api.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.Collections;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    public Usuario buscarPorId(Long id) {
        Optional<Usuario> optionalUsuario = usuarioRepository.findById(id);
        return optionalUsuario.orElse(null);
    }

    public Optional<Usuario> buscarPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public Usuario salvar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario registrarUsuario(String nome, String email, String senha, Set<proj.ifpb.api.model.Role> roles) {
        Usuario novoUsuario = new Usuario(nome, email, senha, roles);
        // Aqui a gente tem que criar logica pra validação de registro
        return salvar(novoUsuario);
    }

    public void garantirUnicoAdmin() {
        if (!usuarioRepository.existsByRolesContaining(proj.ifpb.api.model.Role.ADMINISTRADOR)) {
            // Aqui a gente faz com que sempre tenha um admin caso nao exista ja no banco
            Usuario admin = new Usuario("Admin", "admin@example.com", "senha123",
                    Collections.singleton(proj.ifpb.api.model.Role.ADMINISTRADOR));
            salvar(admin);
        }
    }

}
