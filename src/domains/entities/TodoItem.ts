export interface TodoItem {
  title: string
  text: string
}

export class TodoItemImpl implements TodoItem {
  public constructor(public title: string, public text: string) {}
}
