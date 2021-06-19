// const items = require("../items");
const { getItems, getItem } = require("../controllers/items");

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
    handler: getItems,
  };

  fastify.get("/items", getItemsOpts);

  // Get single item

  const getItemOpts = {
    schema: {
      response: {
        200: Item,
      },
    },
    handler: getItem,
  };

  fastify.get("/items/:id", getItemOpts);

  done();
}

module.exports = itemRoutes;
