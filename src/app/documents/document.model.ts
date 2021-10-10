export class Document {
    public documentId : number;
    public documentName : string;
    public documentDescription : string;
    public documentUrl : string;
    public documentChildren : string;

    constructor(id: number, 
                name: string, 
                description: string,
                url: string, 
                children: string){

        this.documentId = id;
        this.documentName = name;
        this.documentDescription = description;
        this.documentUrl = url;
        this.documentChildren = children;

    };
}
