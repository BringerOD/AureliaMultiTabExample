//import {computedFrom} from 'aurelia-framework';
import {Container} from 'aurelia-dependency-injection';
import 'bootstrap';
import {Workspaces,Workspace} from './services/workspaces/workspace';

export class shell {
  
  constructor( container: Container) {
        this.test = 'Welcome to the Prime V5!';
        this.controller = new Workspaces();
       
      }

  activate(params, routeConfig) {

        console.log(routeConfig);
        this.AddWorkspace(params);
          
  }

  AddWorkspace(params){

     this.controller.addWorkspace(params.section,params.viewmodel, params.id);


  }
}

