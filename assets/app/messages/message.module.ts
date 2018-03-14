import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessageInputComponent } from './message-input.component';
import { MessageComponent } from './message.component';
import { MessagesComponent } from './messages.component';
import { MessageListComponent } from './message-list.component';
import { MessageService } from './messages.service';

@NgModule({
    declarations: [
        MessagesComponent,
        MessageListComponent,
        MessageComponent,
        MessageInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [MessageService]
})
export class MessageModule {

}