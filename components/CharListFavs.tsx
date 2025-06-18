import CharCard from "../islands/CharCard.tsx";
import { Char } from "../types.ts";

type data = {
    chars: Char[]
}

export default function CharListFavs({chars}:data) {

    return(
        <div class='grid'>
            {chars.map((e:Char)=>(<CharCard char={e} favs="si" />))}
        </div>
    )
}