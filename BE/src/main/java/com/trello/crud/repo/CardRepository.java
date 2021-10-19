package com.trello.crud.repo;

import com.trello.crud.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CardRepository extends JpaRepository<Card, Integer> {
    List<Card> findByOwner(String owner);
}
