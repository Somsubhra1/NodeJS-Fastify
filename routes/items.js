// const items = require("../items");
const {
  getItems,
  getItem,
  addItem,
  deleteItem,
} = require("../controllers/items");

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
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteItem,
};

function itemRoutes(fastify, options, done) {
  // Get all items

  fastify.get("/items", getItemsOpts);

  // Get single item

  fastify.get("/items/:id", getItemOpts);

  // Post item

  fastify.post("/items", postItemOpts);

  // Delete item
  fastify.delete("/items/:id", deleteItemOpts);

  done();
}

module.exports = itemRoutes;
