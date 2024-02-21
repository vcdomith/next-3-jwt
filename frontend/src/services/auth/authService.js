import { HttpClient } from "../../infra/HttpClient/HttpClient"
import { tokenService } from "./tokenService"

export const authService = {

    async login({ username, password }) {

        const res = await HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
            method: 'POST',
            body: { username, password }
        })

        if (!res.ok) throw new Error('Usuário ou senha inválido')

        const body = res.body

        tokenService.save(body.data.access_token)

    }

}