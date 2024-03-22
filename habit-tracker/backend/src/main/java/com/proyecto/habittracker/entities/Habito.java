package com.proyecto.habittracker.entities;
import com.proyecto.habittracker.entities.Categoria;
import com.proyecto.habittracker.entities.Usuario;
import jakarta.persistence.*;

@Entity
@Table(name = "habitos", schema = "habitos", catalog = "")
public class Habito {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id_habito")
    private int idHabito;
    @ManyToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "id_categoria")
    private Categoria categoria;

    @ManyToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
    @Basic
    @Column(name = "nombre")
    private String nombre;
    @Basic
    @Column(name = "descripcion")
    private String descripcion;
    @Basic
    @Column(name = "diasConsecutivos")
    private Integer diasConsecutivos;
    @Basic
    @Column(name = "diasTotales")
    private Integer diasTotales;
    @Basic
    @Column(name = "tiempo")
    private Double tiempo;
    @Basic
    @Column(name = "medalla")
    private String medalla;

    public int getIdHabito() {
        return idHabito;
    }

    public void setIdHabito(int idHabito) {
        this.idHabito = idHabito;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getDiasConsecutivos() {
        return diasConsecutivos;
    }

    public void setDiasConsecutivos(Integer diasConsecutivos) {
        this.diasConsecutivos = diasConsecutivos;
    }

    public Integer getDiasTotales() {
        return diasTotales;
    }

    public void setDiasTotales(Integer diasTotales) {
        this.diasTotales = diasTotales;
    }

    public Double getTiempo() {
        return tiempo;
    }

    public void setTiempo(Double tiempo) {
        this.tiempo = tiempo;
    }

    public String getMedalla() {
        return medalla;
    }

    public void setMedalla(String medalla) {
        this.medalla = medalla;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Habito habito = (Habito) o;

        if (idHabito != habito.idHabito) return false;
        if (nombre != null ? !nombre.equals(habito.nombre) : habito.nombre != null) return false;
        if (descripcion != null ? !descripcion.equals(habito.descripcion) : habito.descripcion != null) return false;
        if (diasConsecutivos != null ? !diasConsecutivos.equals(habito.diasConsecutivos) : habito.diasConsecutivos != null)
            return false;
        if (diasTotales != null ? !diasTotales.equals(habito.diasTotales) : habito.diasTotales != null) return false;
        if (tiempo != null ? !tiempo.equals(habito.tiempo) : habito.tiempo != null) return false;
        if (medalla != null ? !medalla.equals(habito.medalla) : habito.medalla != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idHabito;
        result = 31 * result + (nombre != null ? nombre.hashCode() : 0);
        result = 31 * result + (descripcion != null ? descripcion.hashCode() : 0);
        result = 31 * result + (diasConsecutivos != null ? diasConsecutivos.hashCode() : 0);
        result = 31 * result + (diasTotales != null ? diasTotales.hashCode() : 0);
        result = 31 * result + (tiempo != null ? tiempo.hashCode() : 0);
        result = 31 * result + (medalla != null ? medalla.hashCode() : 0);
        return result;
    }
}
