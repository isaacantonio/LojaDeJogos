package proj.ifpb.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import proj.ifpb.api.model.Anuncio;

import java.util.List;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {

    List<Anuncio> findByCategoriaIgnoreCase(String categoria);

    List<Anuncio> findByTituloContainingIgnoreCaseOrCategoriaContainingIgnoreCase(String titulo, String categoria);

    // Depois melhorar essa consulta
    @Query("SELECT a FROM Anuncio a WHERE LOWER(a.titulo) LIKE LOWER(CONCAT('%', :filtro, '%')) OR LOWER(a.categoria) LIKE LOWER(CONCAT('%', :filtro, '%'))")
    List<Anuncio> buscarPorFiltro(@Param("filtro") String filtro);

    List<Anuncio> findByTituloContainingIgnoreCaseAndCategoriaContainingIgnoreCase(String titulo, String categoria);
}
