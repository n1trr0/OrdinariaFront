import CharCard from "../islands/CharCard.tsx";
import { Char } from "../types.ts";

type data = {
    chars: Char[]
}

export default function CharList({chars}:data) {
    return(
        <div class='grid'>
            {chars.map((e:Char)=>(<CharCard char={e}/>))}
        </div>
    )
}