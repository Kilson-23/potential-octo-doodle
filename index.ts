export default function setRoutes(app) {
    const IndexController = require('../controllers/index').default;
    const indexController = new IndexController();

    app.get('/', indexController.getIndex.bind(indexController));
}