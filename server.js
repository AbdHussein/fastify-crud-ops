import fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import items from './routes/items.js';

const app = fastify({logger:true});
const PORT = process.env.PORT || 5000;

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' }
    }
})
app.register(items);

const start = async () => {
    try{
        await app.listen(PORT)
    }catch(error){
        app?.log?.error(error)
        process.exit(1)
    }
}

start();