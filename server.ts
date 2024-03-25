import { id } from './node_modules/next-auth/client/__tests__/helpers/mocks.d';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
     const id = await prisma.user.create({
          data: {
               title: 
          }
     })
}