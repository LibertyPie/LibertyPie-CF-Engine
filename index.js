/**
 * LibertyPie Project
 * @author https://github.com/libertypie (hello@libertypie.com)
 * @license MIT
 */
const Routes = require("./routes")

addEventListener('fetch', async (event) => {
    event.respondWith(Routes(event.request))
})