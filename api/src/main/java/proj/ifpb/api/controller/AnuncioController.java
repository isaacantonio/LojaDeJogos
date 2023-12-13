package proj.ifpb.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import proj.ifpb.api.model.Anuncio;
import proj.ifpb.api.service.AnuncioService;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
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
    public ResponseEntity<Anuncio> criarAnuncio(
            @RequestParam("foto") MultipartFile foto,
            @RequestParam("titulo") String titulo,
            @RequestParam("descricao") String descricao,
            @RequestParam("valor") BigDecimal valor,
            @RequestParam("categoria") String categoria,
            @RequestParam("plataformas") List<String> plataformas,
            @RequestParam("tags") String tags) throws IOException {

        Anuncio anuncio = new Anuncio(titulo, descricao, valor, plataformas, categoria, tags);

        if (foto != null && !foto.isEmpty()) {
            anuncio.setFoto(foto.getBytes());
        }

        Anuncio novoAnuncio = anuncioService.criarAnuncio(anuncio);
        return ResponseEntity.ok(novoAnuncio);
    }

    @GetMapping("/buscarPorId/{id}")
    public ResponseEntity<Anuncio> buscarPorId(@PathVariable Long id) {
        Optional<Anuncio> anuncio = anuncioService.buscarPorId(id);

        if (anuncio.isPresent()) {
            return ResponseEntity.ok(anuncio.get());
        } else {
            return ResponseEntity.notFound().build();
        }
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

    @GetMapping("/buscarPorPlataformaEFiltro")
    public ResponseEntity<List<Anuncio>> buscarPorPlataformaEFiltro(
            @RequestParam(required = false) String plataforma, @RequestParam String filtro) {
        List<Anuncio> anuncios = anuncioService.buscarPorPlataformaEFiltro(plataforma, filtro);
        return ResponseEntity.ok(anuncios);
    }
}
