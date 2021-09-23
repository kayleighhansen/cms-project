import { identifierModuleUrl } from "@angular/compiler"
//import { Console } from "console"

export class Contact {
    public contactId : number;
    public contactName : string;
    public contactEmail : string;
    public contactPhone : string;
    public contactImageUrl : string;
    public contactGroup : string;

    constructor(id: number, 
                name: string, 
                email: string,
                phone: string, 
                imageUrl: string,
                group: string){

        this.contactName = name;
        this.contactId = id;
        this.contactEmail = email;
        this.contactPhone = phone;
        this.contactImageUrl = imageUrl;
        this.contactGroup = group;

    };
}
