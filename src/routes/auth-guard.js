

const isAuthenticatedGuard = async(to,from,next) =>{
    return new Promise(() => {
        const random = Math.random() * 100

        if (random > 50) {
            console.log('Autenticado')
            next()
        }else{
            console.log('Bloqueado por el autenticador')
            next({name: 'pokemon-page'})
        }
    })
    // console.log({to,from,next})
}

export default isAuthenticatedGuard
