package com.trello.crud.controller;

import com.trello.crud.model.Card;
import com.trello.crud.model.Task;
import com.trello.crud.services.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CrudRestController {

    @Autowired
    private CrudService service;

    @GetMapping("/getCardListByOwner/{owner}")
    public List<Card> fetchCardListByOwner(@PathVariable String owner) {
        List<Card> cards = new ArrayList<Card>();
        //logic to fetch list from database
        cards = service.fetchCardListByOwner(owner);
        return cards;
    }

    @GetMapping("/getTasksList")
    public List<Task> fetchTaskList() {
        List<Task> tasks = new ArrayList<Task>();
        //logic to fetch list from database
        tasks = service.fetchTaskList();
        return tasks;
    }

    @PostMapping("/addTask")
    public Task saveTask(@RequestBody Task task) {
        return service.saveTask(task);
    }

    @PostMapping("/addCard")
    public Card saveCard(@RequestBody Card card) {
        return service.saveCard(card);
    }

    @GetMapping("/getTaskById/{id}")
    public Task fetchTaskById(@PathVariable int id) {
        return service.fetchTaskById(id).get();
    }

    @DeleteMapping("/deleteTaskById/{id}")
    public ResponseEntity deleteTaskById(@PathVariable int id) { return service.deleteTaskById(id); }

    @DeleteMapping("/deleteCardById/{id}")
    public ResponseEntity deleteCardById(@PathVariable int id) { return service.deleteCardById(id); }

    @PatchMapping("/updateTask")
    public ResponseEntity updateTask(@RequestBody Task task) {
        System.out.println("hellooooo" + task);
        return service.updateTask(task);
    }

}





























