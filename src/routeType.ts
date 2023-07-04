


export enum ServerAuthErrorCode {
    serverError,
    usernameNotFound,
    invalidCredentials,
    refreshTokenNotFound,
    refreshTokenNotValid,
    accessTokenNotFound,
    accessTokenNotValid,
    parameterNotValid,
}

export interface ServerErrorResponse {
    serverCode: ServerAuthErrorCode
}

export interface LoginRequest {
    username: string
    password: string
}