const fastify = require("fastify")({ logger: true });

fastify.get("/items", (req, reply) => {
  reply.send({ test: "hello" });
});

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
