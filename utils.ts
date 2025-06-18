export const getCookie = (name:string): string => {
    const cookie = document.cookie
    return (cookie && cookie.includes(`${name}=`)) ? cookie.split(`${name}=`)[1].split(';')[0] : ''
}

export const setCookie = (name:string, value:string) => {
    document.cookie =`${name}=${value};path=/;expires=${expiresNextYear()}` 
}

export const delCookie = (name:string) => {
    document.cookie =`${name}=delete;path=/;expires=${expiresNegative()}` 
}

export const expiresNextYear = (): string => {
    const date = new Date()
    return new Date(date.getTime()+ 365 * 24 * 60 * 60 * 1000).toUTCString()
}

export const expiresNegative = (): string => {
    const date = new Date()
    return new Date(date.getTime()- 365 * 24 * 60 * 60 * 1000).toUTCString()
}