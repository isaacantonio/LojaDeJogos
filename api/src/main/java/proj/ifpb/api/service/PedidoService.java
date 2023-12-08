package proj.ifpb.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import proj.ifpb.api.model.Anuncio;
import proj.ifpb.api.model.Pedido;
import proj.ifpb.api.model.Usuario;
import proj.ifpb.api.repository.AnuncioRepository;
import proj.ifpb.api.repository.PedidoRepository;
import proj.ifpb.api.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;
    @Autowired
    private AnuncioRepository anuncioRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    // public Pedido criarPedido(List<Long> anuncioIds, Usuario cliente) {
    // List<Anuncio> anuncios = anuncioRepository.findAllById(anuncioIds);
    // Pedido pedido = new Pedido(anuncios, cliente);
    // return pedidoRepository.save(pedido);
    // }

    public List<Pedido> obterPedidosPorCliente(Usuario cliente) {
        return pedidoRepository.findByCliente(cliente);
    }

    public Pedido criarPedido(List<Long> anuncioIds, Usuario cliente, String status) {
        List<Anuncio> anuncios = anuncioRepository.findAllById(anuncioIds);
        Pedido pedido = new Pedido(anuncios, cliente, status);
        pedido.calcularValor();
        return pedidoRepository.save(pedido);
    }

    public boolean excluirPedido(Long pedidoId) {
        Optional<Pedido> pedidoOptional = pedidoRepository.findById(pedidoId);

        if (pedidoOptional.isPresent()) {
            pedidoRepository.deleteById(pedidoId);
            return true;
        } else {
            return false;
        }
    }

    public Pedido editarPedido(Long pedidoId, List<Long> novoAnuncioIds, Usuario novoCliente, String novoStatus) {
        Optional<Pedido> optionalPedido = pedidoRepository.findById(pedidoId);

        return optionalPedido.map(pedido -> {
            List<Anuncio> novosAnuncios = anuncioRepository.findAllById(novoAnuncioIds);
            pedido.setCliente(novoCliente);
            pedido.setAnuncios(novosAnuncios);
            pedido.calcularValor();
            pedido.setStatus(novoStatus); // Atualize o status conforme o valor recebido
            return pedidoRepository.save(pedido);
        }).orElse(null);
    }
}
