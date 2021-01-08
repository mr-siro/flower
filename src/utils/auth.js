import Cookies from 'js-cookie'

const TokenKey = 'token'
export default class Auth {
    static getToken() {
        return Cookies.get(TokenKey)
    }

    static setToken(token) {
        return Cookies.set(TokenKey, token)
    }

    static removeToken() {
        return Cookies.remove(TokenKey)
    }
}
