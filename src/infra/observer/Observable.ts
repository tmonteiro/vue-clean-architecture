import Observer from "./Observer";

export default class Observable {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  on(observer: Observer) {
    this.observers.push(observer);
  }

  notify(eventName: string, data: any) {
    this.observers.forEach((observer) => {
      if(observer.eventName === eventName) {
        observer.callback(data);
      }
    });
  };

}
