import { useEffect, useState } from "preact/hooks";
import { Char } from "../types.ts";
import { delCookie, getCookie, setCookie } from "../utils.ts";

type data = {
    char: Char,
    favs? : string,
    detalle? : string
}

export default function CharCard({char, favs, detalle}:data) {
    const [fav, setFav] = useState<string>('star fav')

    const addFav = () => {
        const favorites = getCookie('favorites')
        if(favorites){
            if(favorites.includes(char.id)) return
            const favs = favorites.split(',')
            favs.push(char.id)
            setCookie('favorites', favs.join(','))
        }else{
            setCookie('favorites', char.id)
        }
    }
    const delFav = () => {
        const favorites = getCookie('favorites')
        if(favorites){
            let favs = favorites.split(',')
            favs = favs.filter((e) => char.id !== e)
            if(favs.length !== 0)setCookie('favorites', favs.join(','))
            if(favs.length === 0) delCookie('favorites')
        }
    }

    const handleFav = () => {
        if(fav === 'star'){
            setFav('star fav')
            addFav()
        }else{
            setFav('star')
            delFav()
        }
    }
    useEffect(()=>{
        const favorites = getCookie('favorites')
        const favsArray = favorites.split(',')
        console.log(favs)
        if(favs){return}
        if(!favsArray.includes(char.id))setFav('star')
    },[])
    
    return(
        ( !detalle ?
        <div class='card'>
            <a href={`/characters/${char.id}`}>
                <img src={char.image || '/noImage.jpg'} alt={char.name} />
            </a>
            <div class='card-info'>
                <a class='name' href={`/characters/${char.id}`}>{char.name}</a>
                <span class={fav} onClick={handleFav}>★</span>
            </div>
        </div>
        :
        <div class='detail'>
            <img src={char.image || '/noImage.jpg'} alt={char.name}/>
            <h2>
                {char.name}
                <span class={fav} onClick={handleFav}>★</span>
            </h2>
            <p>{char.house ? `Casa: ${char.house}` : 'Casa: Desconocido'}</p>
            <p>{char.alive ? 'Vivo' : 'Muerto'}</p>
            <a href='/'>Volver</a>
        </div>
        )
    )
}