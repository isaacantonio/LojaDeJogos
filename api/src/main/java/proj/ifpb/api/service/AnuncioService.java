package proj.ifpb.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proj.ifpb.api.model.Anuncio;
import proj.ifpb.api.repository.AnuncioRepository;
import java.util.List;
import java.util.Optional;

@Service
public class AnuncioService {

    @Autowired
    private AnuncioRepository anuncioRepository;

    public List<Anuncio> listarTodos() {
        return anuncioRepository.findAll();
    }

    public List<Anuncio> buscarAnunciosPorFiltro(String filtro) {
        return anuncioRepository.bucasrGeral(filtro);
    }

    public List<Anuncio> buscarAnunciosPorCategoria(String categoria) {
        return anuncioRepository.findByCategoriaIgnoreCase(categoria);
    }

    public List<Anuncio> buscarAnunciosPorTituloECategoria(String titulo, String categoria) {
        return anuncioRepository.findByTituloContainingIgnoreCaseAndCategoriaContainingIgnoreCase(titulo, categoria);
    }

    public Anuncio criarAnuncio(Anuncio anuncio) {
        return anuncioRepository.save(anuncio);
    }

    public void excluirAnuncio(Long id) {
        anuncioRepository.deleteById(id);
    }

    public Anuncio editarAnuncio(Long id, Anuncio anuncioAtualizado) {
        Optional<Anuncio> optionalAnuncio = anuncioRepository.findById(id);

        if (optionalAnuncio.isPresent()) {
            Anuncio anuncioExistente = optionalAnuncio.get();
            anuncioExistente.setTitulo(anuncioAtualizado.getTitulo());
            anuncioExistente.setDescricao(anuncioAtualizado.getDescricao());
            anuncioExistente.setValor(anuncioAtualizado.getValor());
            anuncioExistente.setCategoria(anuncioAtualizado.getCategoria());
            anuncioExistente.setFotos(anuncioAtualizado.getFotos());
            return anuncioRepository.save(anuncioExistente);
        } else {
            return null;
        }
    }

    public List<Anuncio> buscarPorPlataformaEFiltro(String plataforma, String filtro) {
        return anuncioRepository.buscarPorPlataformaEFiltro(plataforma, filtro);
    }
}
