export default class TodoItem {
    public id: number;
    public title: string;
    public description: string;
    public datetime: string;
    constructor(id: number, title: string, description: string, datetime: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.datetime = datetime;
    }
}
