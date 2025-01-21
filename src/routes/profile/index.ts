import {FastifyInstance, FastifyPluginAsync} from 'fastify'
import {getProfileFromGitHub} from '../../services/profile.service'

const profileRoute: FastifyPluginAsync = async (fastify: FastifyInstance, opts) => {
    fastify.get('/', async (request, reply) => {
        const GITHUB_JSON_URL = '';
        const profileData = await getProfileFromGitHub(GITHUB_JSON_URL)
        return {
            profile: profileData,
        }
    })
}

export default profileRoute
