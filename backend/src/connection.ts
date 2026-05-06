import type { Socket } from "socket.io"
import * as globals from "./globals"
import { handleAuthe } from "./connection.lib"
import { createSession, generateToken } from "./user-sessions"

function handleLogin(socket: Socket, email: string, password: string) {
    const session = createSession(email, generateToken(), Date.now() + globals.TOKEN_LIFE_MS)
    socket.emit("success login", session.token)
}

function handleLogout(socket: Socket, token: string) {
    if (!handleAuthe(socket, token)) return
    socket.emit("success logout")
}

export default function handleConnection(socket: Socket) {
    socket.on("login", (email: string, password: string) => handleLogin(socket, email, password))
    socket.on("logout", (token: string) => handleLogout(socket, token))
}
