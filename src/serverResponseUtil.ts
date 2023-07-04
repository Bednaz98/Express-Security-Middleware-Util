import { Response } from 'express'
import { ServerAuthErrorCode } from "./routeType";


export function serverErrorCodeToStatus(errorType: ServerAuthErrorCode) {
    switch (errorType) {
        case ServerAuthErrorCode.invalidCredentials: return 401;
        case ServerAuthErrorCode.usernameNotFound: return 401;
        case ServerAuthErrorCode.refreshTokenNotFound: return 401
        case ServerAuthErrorCode.refreshTokenNotValid: return 401;
        case ServerAuthErrorCode.accessTokenNotFound: return 401;
        case ServerAuthErrorCode.accessTokenNotValid: return 401
        case ServerAuthErrorCode.serverError: return 500;
        case ServerAuthErrorCode.parameterNotValid: return 422;
        default: return 500;
    }
}


export function sendGenericError(Response: Response, errorType: ServerAuthErrorCode) {
    return Response.status(serverErrorCodeToStatus(errorType)).send({ errorError: ServerAuthErrorCode[errorType] });
}