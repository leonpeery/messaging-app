import { Component, OnInit } from '@angular/core';

import { MessageService } from './messages.service';
import { Message } from './message.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        if(this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                )
            this.message = null;
            
        } else {
            //Create
            const message = new Message(form.value.content , 'Leon');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    function(error) {
                        console.error(error)
                    }
                ) ;
        }
        form.resetForm();
    }
    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        )
    }
}