import {PrismaClient} from '@prisma/client'

export async function getAllPosts(prisma: PrismaClient) {
    return prisma.posts.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })
}
