import type { Socket } from "socket.io";
import { getSession } from "./user-sessions"

export function handleAuthe(socket: Socket, token: string) {
    if (!getSession(token)) {
        socket.emit("invalid token")
        return false
    }

    return true
}
