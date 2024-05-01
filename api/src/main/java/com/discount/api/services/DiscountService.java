package com.discount.api.services;

import com.discount.api.entity.Discount;
import com.discount.api.repository.DiscountRepository;
import com.discount.api.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class DiscountService {

    @Autowired
    private DiscountRepository repository;

    //Retornar todos os jogos
    public List<Discount> findAll() {
        return repository.findAll();
    }

    //Retornar jogo por id
    public Discount findById(Long id) {
        Optional<Discount> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException(id));
    }

    // Salvar no Banco de dados
    public Discount save(Discount discount) {
        return repository.save(discount);
    }

    //Atualizar no Banco de Dados
    public Discount update(Discount discount, Long id) {
        Optional<Discount> op = repository.findById(id);
        if (op.isPresent()) {
            Discount obj = op.get();
            obj.setTitulo(discount.getTitulo());
            obj.setSubTitulo(discount.getSubTitulo());
            obj.setCategoria(discount.getCategoria());
            obj.setData(discount.getData());
            obj.setPreco(discount.getPreco());
            obj.setPrecoAnterior(discount.getPrecoAnterior());
            obj.setPromocao(discount.getPromocao());
            obj.setUrlJogo(discount.getUrlJogo());
            obj.setUrlImagem(discount.getUrlImagem());
            obj.setPorcentagemDesconto(discount.getPorcentagemDesconto());
            repository.save(obj);
        }
        return null;
    }

    // Deletar por id
    public void delete(Long id) {
        repository.deleteById(id);
    }

}
