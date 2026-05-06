import { randomInt } from "crypto"

type Session = {
    email: string
    token: string
    expiresAt: number
}

const sessions: Session[] = []

export function createSession(email: string, token: string, expiresAt: number) {
    const session: Session = { email, token, expiresAt, }
    sessions.push(session)
    return session
}

export function getSession(token: string): Session | undefined {
    const result = sessions.find(session => session.token === token)
    if (result && result.expiresAt > Date.now()) return result
    deleteSession(token)
    return undefined
}

export function deleteSession(token: string) {
    const index = sessions.findIndex(session => session.token === token)
    if (index !== -1) sessions.splice(index, 1)
}

export function generateToken() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-[]{}()"
    let token = ""
    for (let i = 0; i < 64; i++) {
        token += chars[randomInt(0, chars.length)]
    }

    return token
}
