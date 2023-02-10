import { Router } from "./router.js";

const routes = new Router()
routes.add('/', '../pages/home.html')
routes.add('/explore', '../pages/explore.html' )
routes.add('/universe', '../pages/universe.html')

routes.handle()

window.onpopstate = () => routes.handle()
window.route = () => routes.router()