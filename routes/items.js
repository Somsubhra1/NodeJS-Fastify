const items = require("../items");

function itemRoutes(fastify, options, done) {
  fastify.get("/items", (req, reply) => {
    // Can also send response directly through return
    // return items;
    reply.send(items);
  });

  fastify.get("/items/:id", (req, reply) => {
    const { id } = req.params;

    const item = items.find((item) => item.id === id);

    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
