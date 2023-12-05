package proj.ifpb.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import proj.ifpb.api.model.Anuncio;
import proj.ifpb.api.service.AnuncioService;

import java.util.List;

@RestController
@RequestMapping("/anuncios")
public class AnuncioController {

    @Autowired
    private AnuncioService anuncioService;

    @GetMapping("/listar")
    public ResponseEntity<List<Anuncio>> listarAnuncios() {
        List<Anuncio> anuncios = anuncioService.listarTodos();
        return ResponseEntity.ok(anuncios);
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Anuncio>> buscarAnuncios(@RequestParam String filtro) {
        List<Anuncio> anuncios = anuncioService.buscarAnunciosPorFiltro(filtro);
        return ResponseEntity.ok(anuncios);
    }

    @GetMapping("/buscarPorCategoria")
    public ResponseEntity<List<Anuncio>> buscarAnunciosPorCategoria(@RequestParam String categoria) {
        List<Anuncio> anuncios = anuncioService.buscarAnunciosPorCategoria(categoria);
        return ResponseEntity.ok(anuncios);
    }

    @GetMapping("/buscarPorTituloECategoria")
    public ResponseEntity<List<Anuncio>> buscarAnunciosPorTituloECategoria(
            @RequestParam String titulo, @RequestParam String categoria) {
        List<Anuncio> anuncios = anuncioService.buscarAnunciosPorTituloECategoria(titulo, categoria);
        return ResponseEntity.ok(anuncios);
    }

    @PostMapping("/criar")
    public ResponseEntity<Anuncio> criarAnuncio(@RequestBody Anuncio anuncio) {
        Anuncio novoAnuncio = anuncioService.criarAnuncio(anuncio);
        return ResponseEntity.ok(novoAnuncio);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<String> excluirAnuncio(@PathVariable Long id) {
        anuncioService.excluirAnuncio(id);
        return ResponseEntity.ok("Anúncio excluído com sucesso");
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<Anuncio> editarAnuncio(@PathVariable Long id, @RequestBody Anuncio anuncio) {
        Anuncio anuncioAtualizado = anuncioService.editarAnuncio(id, anuncio);
        return ResponseEntity.ok(anuncioAtualizado);
    }
}
