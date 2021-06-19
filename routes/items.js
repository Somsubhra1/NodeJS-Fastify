// const items = require("../items");
const { getItems, getItem, addItem } = require("../controllers/items");

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// options for get items

const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

function itemRoutes(fastify, options, done) {
  // Get all items

  fastify.get("/items", getItemsOpts);

  // Get single item

  fastify.get("/items/:id", getItemOpts);

  // Post item

  fastify.post("/items", postItemOpts);

  done();
}

module.exports = itemRoutes;
