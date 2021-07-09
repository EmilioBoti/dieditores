class ModelMember{
    public firstName: string
    public secondName: string
    public firstLastname: string
    public secondLastname: string
    public description: string

    constructor(firstName: string,secondName: string,firstLastname: string, secondLastname: string,description: string   ){
        this.firstName = firstName
        this.secondName = secondName 
        this.firstLastname = firstLastname
        this.secondLastname = secondLastname 
        this.description = description 
    }

}
export { ModelMember }