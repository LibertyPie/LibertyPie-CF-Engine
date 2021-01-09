/**
 * LibertyPie Project
 * @author https://github.com/libertypie (hello@libertypie.com)
 * @license MIT
 */
const  RouterEngine = require("./classes/RouterEngine")
const router = new RouterEngine()

 module.exports = async (request) => {
    
    //routes 
    router.get('/', () => new Response('Hello worker!'))

    //return response
    return await router.route(request);
 } //end routes

