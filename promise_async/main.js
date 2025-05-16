const service = new Service()
const dataviewController = new Dataviewcontroller()
service.init().then((array) =>{
    dataviewController.renderData(array);
});