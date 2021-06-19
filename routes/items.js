const items = require("../items");

function itemRoutes(fastify, options, done) {
  // Get all items

  // options for get items

  const getItemsOpts = {
    schema: {
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
            },
          },
        },
      },
    },
  };
  fastify.get("/items", getItemsOpts, (req, reply) => {
    reply.send(items);
  });

  // Get single item

  const getItemOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
          },
        },
      },
    },
  };
  fastify.get("/items/:id", getItemOpts, (req, reply) => {
    const { id } = req.params;

    const item = items.find((item) => item.id === id);

    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
