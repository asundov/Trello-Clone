package com.trello.crud.model;


import javax.persistence.*;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;
    private String message;
    private boolean reminder;

    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;

    public Task() {
    }

    public Task(int id, String title, String message, boolean reminder) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.reminder = reminder;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isReminder() {
        return reminder;
    }

    public void setReminder(boolean reminder) {
        this.reminder = reminder;
    }

/*    public Card getCard() {
        return card;
    }*/

    public void setCard(Card card) {
        this.card = card;
    }
}