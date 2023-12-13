package proj.ifpb.api.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

import java.math.BigDecimal;
import java.util.List;

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
    private List<String> plataformas;

    @Lob
    private byte[] foto;

    private String tags;

    public Anuncio() {
    }

    public Anuncio(String titulo, String descricao, BigDecimal valor, List<String> plataformas, String categoria,
            String tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.valor = valor;
        this.plataformas = plataformas;
        this.categoria = categoria;
        this.tags = tags;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public List<String> getPlataformas() {
        return plataformas;
    }

    public void setPlataformas(List<String> plataformas) {
        this.plataformas = plataformas;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public void setFoto(byte[] bytes) {
        this.foto = bytes;
    }

}
