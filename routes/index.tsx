import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharList from "../components/CharList.tsx";
import { Char } from "../types.ts";

type data = {
  chars: Char[]
}

export const handler: Handlers<data> = {
  GET: async(_req:Request, ctx:FreshContext<unknown,data>) => {
    const res = await fetch('https://hp-api.onrender.com/api/characters')
    const chars: Char[] = await res.json()
    return ctx.render({chars})
  },
};


export default function Home(props: PageProps<data>) {
  return (
    <CharList chars={props.data.chars} />
  );
}
