const boom = require('boom')
const Joi = require('joi')

const ShortestPath = require('../../models/cheapest/ShortestPath')

module.exports = {
  shortest: (req) => {
    const schema = Joi.object().keys({
      vertices: Joi.array().required(),
      path: Joi.array().required()
    })
    const result = Joi.validate(req.body, schema)
    if (result.error) throw boom.badRequest(result.error.message)

    const shortestPath = new ShortestPath()
    shortestPath.addVertexes(result.value.vertices)
    return { result: shortestPath.shortest(...result.value.path), graph: shortestPath.getGraph() }
  }
}
