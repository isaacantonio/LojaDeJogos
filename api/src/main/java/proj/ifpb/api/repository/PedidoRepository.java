package proj.ifpb.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import proj.ifpb.api.model.Pedido;
import proj.ifpb.api.model.Usuario;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByCliente(Usuario cliente);
}