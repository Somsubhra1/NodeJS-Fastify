const items = require("../items");

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

function itemRoutes(fastify, options, done) {
  // Get all items

  // options for get items

  const getItemsOpts = {
    schema: {
      response: {
        200: Item,
      },
    },
    handler: (req, reply) => {
      reply.send(items);
    },
  };

  fastify.get("/items", getItemsOpts);

  // Get single item

  const getItemOpts = {
    schema: {
      response: {
        200: Item,
      },
    },
    handler: (req, reply) => {
      const { id } = req.params;

      const item = items.find((item) => item.id === id);

      reply.send(item);
    },
  };

  fastify.get("/items/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
