import * as globals from "./globals"
import handleConnection from "./connection"

const server = (await import("http")).createServer()
const io = new (await import("socket.io")).Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "DELETE"],
    }
})

io.on("connection", handleConnection)

server.listen(globals.PORT, () => {
    console.log(`Gampaneel backend started on ${globals.PORT}`)
})
