const fastify = require("fastify")({ logger: true });
// const items = require("./items");

// fastify.get("/items", (req, reply) => {
//   // Can also send response directly through return
//   // return items;
//   reply.send(items);
// });

// fastify.get("/items/:id", (req, reply) => {
//   const { id } = req.params;

//   const item = items.find((item) => item.id === id);

//   reply.send(item);
// });

// Register multiple routes files
fastify.register(require("./routes/items"));

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
