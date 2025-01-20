import {FastifyInstance, FastifyPluginAsync} from 'fastify'
import {getAllPosts} from '../../services/posts.service'

const postsRoute: FastifyPluginAsync = async (fastify: FastifyInstance, opts) => {
    // GET /posts
    fastify.get('/', async (request, reply) => {
        return getAllPosts(fastify.prisma);
    })
}

export default postsRoute
