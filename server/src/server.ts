import fastify from "fastify";
import { PrismaClient } from "@prisma/client"
import cors from "@fastify/cors"

const app = fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get("/hello", async () => {
    const habits = prisma.habit.findMany()
    return habits
})

app.listen({
    port: 3333,
}).then( () => {
    console.log(`HTTP server running on http://localhost:3333`);
    
})
