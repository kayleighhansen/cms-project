export class Contact {
    
    public messageId : number;
    public messageSubject : string;
    public messageText : string;
    public messageSender : string;

    constructor(id: number, 
                subject: string, 
                text: string,
                sender: string){

        this.messageId = id;
        this.messageSubject = subject;
        this.messageText = text;
        this.messageSender = sender;

    };
}