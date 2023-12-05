package proj.ifpb.api.model;

import java.math.BigDecimal;
import java.util.List;
import jakarta.persistence.*;

@Entity
public class Anuncio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descricao;
    private BigDecimal valor;
    private String categoria;
    @ElementCollection
    private List<String> fotos;

    public Anuncio() {
    }

    public Anuncio(String titulo, String descricao, BigDecimal valor,
            List<String> fotos, List<String> caracteristicas, String categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.valor = valor;
        this.fotos = fotos;
        this.categoria = categoria;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public List<String> getFotos() {
        return fotos;
    }

    public void setFotos(List<String> fotos) {
        this.fotos = fotos;
    }

}
