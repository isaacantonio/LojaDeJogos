package proj.ifpb.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import proj.ifpb.api.model.Anuncio;

import java.util.List;
import java.util.Optional;

public interface AnuncioRepository extends JpaRepository<Anuncio, Long> {

        List<Anuncio> findByCategoriaIgnoreCase(String categoria);

        List<Anuncio> findByTituloContainingIgnoreCaseOrCategoriaContainingIgnoreCase(String titulo, String categoria);

        @Query("SELECT a FROM Anuncio a WHERE LOWER(a.titulo) LIKE LOWER(CONCAT('%', :filtro, '%'))" +
                        "OR LOWER(a.categoria) LIKE LOWER(CONCAT('%', :filtro, '%'))" +
                        "OR LOWER(a.tags) LIKE LOWER(CONCAT('%', :filtro, '%'))")
        List<Anuncio> bucasrGeral(@Param("filtro") String filtro);

        @Query("SELECT a FROM Anuncio a WHERE " +
                        "(:plataforma IS NULL OR :plataforma IN elements(a.plataformas)) AND " +
                        "(LOWER(a.titulo) LIKE LOWER(CONCAT('%', :filtro, '%')) OR " +
                        "LOWER(a.categoria) LIKE LOWER(CONCAT('%', :filtro, '%')) OR " +
                        "LOWER(a.tags) LIKE LOWER(CONCAT('%', :filtro, '%')))")
        List<Anuncio> buscarPorPlataformaEFiltro(
                        @Param("plataforma") String plataforma, @Param("filtro") String filtro);

        List<Anuncio> findByTituloContainingIgnoreCaseAndCategoriaContainingIgnoreCase(String titulo, String categoria);

        Optional<Anuncio> findById(Long id);

}
