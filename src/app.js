export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';

    // var step = {
    //   run: (navigationInstruction, next) => {
    //     return next()
    //   }
    // };
    // config.addPreRenderStep(step);
      
    config.map([
      { route: ['', 'shell/:section/:viewmodel/:id'], name: 'shell',      moduleId: 'shell',      nav: false, title: 'shell' }
      
      

    ]);

    this.router = router;
  }
}
