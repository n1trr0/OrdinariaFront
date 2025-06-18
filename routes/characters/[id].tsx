import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharCard from "../../islands/CharCard.tsx";
import { Char } from "../../types.ts";

type data = {
    char: Char
}

export const handler: Handlers<data> = {
    GET: async(_req:Request, ctx:FreshContext<unknown,data>) => {
        const {id} = ctx.params
        const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
        const chars: Char[] = await res.json()
        const char = chars[0]

        return ctx.render({char})
    },
};

export default function Id(props: PageProps<data>) {
    return (
        <CharCard char={props.data.char} detalle='si' />
    );
}