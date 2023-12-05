package proj.ifpb.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import proj.ifpb.api.model.Role;
import proj.ifpb.api.model.Usuario;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

    boolean existsByRolesContaining(Role administrador);

}
