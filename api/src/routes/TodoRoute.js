const { isNull } = require('../functions/index');
const TodoRepository = require('../repositories/TodoRepository');

module.exports = function (route) {
    route.post('/todo', async (request, response) => {
        const todo = await TodoRepository.create(request.body);

        response.send(todo);
    });

    route.get('/todo', async (request, response) => {
        const todo = await TodoRepository.get();

        response.send(todo);
    });

    route.put('/todo/:id', async (request, response) => {
        const status = !isNull(await TodoRepository.update(request.params.id, request.body));

        response.send({ status });
    });

    route.delete('/todo/:id', async (request, response) => {
        const status = !isNull(await TodoRepository.delete(request.params.id));

        response.send({ status });
    });
};