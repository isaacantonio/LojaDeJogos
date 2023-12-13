package proj.ifpb.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proj.ifpb.api.model.Pedido;
import proj.ifpb.api.model.Usuario;
import proj.ifpb.api.service.PedidoService;
import proj.ifpb.api.service.UsuarioService;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/criar")
    public ResponseEntity<String> criarPedido(@RequestBody PedidoRequest pedidoRequest) {
        Usuario cliente = usuarioService.buscarPorId(pedidoRequest.getClienteId());

        if (cliente != null) {
            Pedido pedido = pedidoService.criarPedido(pedidoRequest.getAnuncioIds(), cliente,
                    pedidoRequest.getStatus());
            return ResponseEntity.ok("Pedido criado com sucesso. ID do Pedido: " + pedido.getId());
        } else {
            return ResponseEntity.badRequest().body("Cliente não encontrado");
        }
    }

    @GetMapping("/usuario/{clienteId}")
    public ResponseEntity<List<Pedido>> obterPedidosDoUsuario(@PathVariable Long clienteId) {
        Usuario cliente = usuarioService.buscarPorId(clienteId);

        if (cliente != null) {
            List<Pedido> pedidos = pedidoService.obterPedidosPorCliente(cliente);
            return ResponseEntity.ok(pedidos);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/editar/{pedidoId}")
    public ResponseEntity<String> editarPedido(
            @PathVariable Long pedidoId,
            @RequestBody PedidoRequest pedidoRequest) {

        Usuario novoCliente = usuarioService.buscarPorId(pedidoRequest.getClienteId());

        if (novoCliente != null) {
            Pedido pedidoAtualizado = pedidoService.editarPedido(pedidoId, pedidoRequest.getAnuncioIds(), novoCliente,
                    pedidoRequest.getStatus());
            if (pedidoAtualizado != null) {
                return ResponseEntity.ok("Pedido atualizado com sucesso. ID do Pedido: " + pedidoAtualizado.getId());
            } else {
                return ResponseEntity.badRequest().body("Pedido não encontrado");
            }
        } else {
            return ResponseEntity.badRequest().body("Novo cliente não encontrado");
        }
    }

    @DeleteMapping("/excluir/{pedidoId}")
    public ResponseEntity<String> excluirPedido(@PathVariable Long pedidoId) {
        boolean removido = pedidoService.excluirPedido(pedidoId);
        if (removido) {
            return ResponseEntity.ok("Pedido excluído com sucesso.");
        } else {
            return ResponseEntity.badRequest().body("Pedido não encontrado");
        }
    }

    public static class PedidoRequest {
        private List<Long> anuncioIds;
        private Long clienteId;
        private String status;

        public List<Long> getAnuncioIds() {
            return anuncioIds;
        }

        public void setAnuncioIds(List<Long> anuncioIds) {
            this.anuncioIds = anuncioIds;
        }

        public Long getClienteId() {
            return clienteId;
        }

        public void setClienteId(Long clienteId) {
            this.clienteId = clienteId;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }
    }

    @GetMapping("/usuario/{clienteId}/pedidos")
    public ResponseEntity<List<PedidoInfo>> infoDosPedidos(@PathVariable Long clienteId) {
        Usuario cliente = usuarioService.buscarPorId(clienteId);

        if (cliente != null) {
            List<Pedido> pedidos = pedidoService.obterPedidosPorCliente(cliente);

            List<PedidoInfo> pedidosInfo = pedidos.stream()
                    .map(pedido -> new PedidoInfo(pedido.getId(), pedido.getStatus(), pedido.getValorTotal()))
                    .collect(Collectors.toList());

            return ResponseEntity.ok(pedidosInfo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public class PedidoInfo {
        private Long id;
        private String status;
        private BigDecimal valorTotal;

        public PedidoInfo(Long id, String status, BigDecimal valorTotal) {
            this.id = id;
            this.status = status;
            this.valorTotal = valorTotal;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }

        public BigDecimal getValorTotal() {
            return valorTotal;
        }

        public void setValorTotal(BigDecimal valorTotal) {
            this.valorTotal = valorTotal;
        }

    }
}
