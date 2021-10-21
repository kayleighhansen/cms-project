export class Message {

    public id : string;
    public subject : string;
    public msgText : string;
    public sender : string;

    constructor(id: string, 
                subject: string, 
                text: string,
                sender: string){

        this.id = id;
        this.subject = subject;
        this.msgText = text;
        this.sender = sender;

    };
}