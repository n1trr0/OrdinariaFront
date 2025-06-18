import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharListFavs from "../components/CharListFavs.tsx";
import { Char } from "../types.ts";

type data = {
    chars: Char[]
    favs: string[]
}

export const handler: Handlers<data> = {
    GET: async(req:Request, ctx:FreshContext<unknown,data>) => {
        const res = await fetch('https://hp-api.onrender.com/api/characters')
        let chars: Char[] = await res.json()

        let favs: string[] = []
        const cookie = req.headers.get('Cookie')
        if(cookie && cookie.includes('favorites=')){
            const favorites = cookie.split(`favorites=`)[1].split(';')[0]
            favs = favorites.split(',')
            chars = chars.filter(e => favs.includes(e.id))
        }else{
            chars = []
        }

        return ctx.render({chars, favs})
    },
};


export default function Favorites(props: PageProps<data>) {
    return (
        <CharListFavs chars={props.data.chars} />
    );
}