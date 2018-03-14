import { MessageService } from './messages.service';
import { Component } from "@angular/core";
var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(messageService) {
        this.messageService = messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessage()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessageListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-list',
                    template: "\n        <div class=\"col-md-8 col-md-offset-2\">\n        <app-message\n            [message]=\"message\"\n            *ngFor=\"let message of messages\"></app-message>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessageListComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessageListComponent;
}());
export { MessageListComponent };
