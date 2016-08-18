
export class EditCustomer {


firstName = 'John';
  lastName = 'Doe';

  sayHello() {
    alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
  }

    constructor() {

    }

    activate(params, routeConfig) {

        this.path = params;

    }


}

