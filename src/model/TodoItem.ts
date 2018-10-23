export default class TodoItem {
    public id: number;
    public title: string;
    public description: string;
    public date: Date;
    constructor(id: number, title: string, description: string, date: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
    }
}
