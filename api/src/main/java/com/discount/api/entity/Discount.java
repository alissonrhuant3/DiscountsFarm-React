package com.discount.api.entity;

import com.discount.api.enums.CategoriaEnum;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Discount {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(nullable = false)
    private String titulo;

    @NotNull
    @Column(nullable = false)
    private String subTitulo;

    @NotNull
    @Column(nullable = false)
    private String promocao;

    @NotNull
    @Column(nullable = false)
    private String urlImagem;

    @NotNull
    @Column(nullable = false)
    private String urlJogo;

    @NotNull
    @Column(nullable = false)
    private Double preco;

    @NotNull
    @Column(nullable = false)
    private Double precoAnterior;

    @NotNull
    @Column(nullable = false)
    private Integer porcentagemDesconto;

    @NotNull
    @Column(nullable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate data;

    private CategoriaEnum categoria;

}
