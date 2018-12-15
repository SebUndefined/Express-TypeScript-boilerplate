export class Client {
    private clientID : number;
    private lastNameClient : string;
    private firstNameClient : string;
    private birthdate : Date;
    /**
     * 
     * @param p_clientID 
     * @param p_lastNameClient 
     * @param p_firstNameClient 
     * @param p_birthdate 
     */
    constructor(p_clientID : number, p_lastNameClient : string, p_firstNameClient : string, p_birthdate : Date ) {
        this.clientID = p_clientID;
        this.lastNameClient = p_lastNameClient;
        this.firstNameClient = p_firstNameClient;
        this.birthdate = p_birthdate;
    }

    /**
     * Getters and Setters
     */
    get ClientID():number {
        return this.clientID;
    }

    set ClientID(p_clientID:number) {
        this.clientID = p_clientID;
    }
    get LastNameClient():string {
        return this.lastNameClient;
    }

    set LastNameClient(p_lastNameClient:string) {
        this.lastNameClient = p_lastNameClient;
    }
    get FirstNameClient():string {
        return this.firstNameClient;
    }

    set FirstNameClient(p_firstNameClient:string) {
        this.firstNameClient = p_firstNameClient;
    }
    get Birthdate():Date {
        return this.birthdate;
    }

    set Birthdate(p_birthdate:Date) {
        this.birthdate = p_birthdate;
    }
}