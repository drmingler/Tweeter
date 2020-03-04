export const SETAUTHUSER = 'SETAUTHUSER';

export function setAuthUser(id) {
    return {
        type : SETAUTHUSER,
        id,

    }

}