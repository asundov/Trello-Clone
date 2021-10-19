package com.trello.crud.services;

import com.trello.crud.model.Card;
import com.trello.crud.model.Task;

import com.trello.crud.repo.CardRepository;
import com.trello.crud.repo.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CrudService {

    @Autowired
    private TaskRepository repo;

    @Autowired
    private CardRepository cardRepo;

    public List<Card> fetchCardListByOwner(String owner) {
        return cardRepo.findByOwner(owner);
    }

    public List<Task> fetchTaskList() {
        return repo.findAll();
    }

    public Task saveTask(Task task) {
        return repo.save(task);
    }

    public ResponseEntity updateTask(Task task) {
        ResponseEntity responseStatus;
        try {
            repo.save(task);
            responseStatus = new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            responseStatus = new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return responseStatus;
    }

    public Card saveCard(Card card) {
        return cardRepo.save(card);
    }


    public Optional<Task> fetchTaskById(int id) {
        return repo.findById(id);
    }

    public ResponseEntity deleteTaskById(int id) {
        ResponseEntity responseStatus;
        try {
            repo.deleteById(id);
            responseStatus = new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            responseStatus = new ResponseEntity<>(HttpStatus.GONE);
        }
        return responseStatus;
    }

    public ResponseEntity deleteCardById(int id) {
        ResponseEntity responseStatus;
        try {
            cardRepo.deleteById(id);
            responseStatus = new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            responseStatus = new ResponseEntity<>(HttpStatus.GONE);
        }
        return responseStatus;
    }
}
