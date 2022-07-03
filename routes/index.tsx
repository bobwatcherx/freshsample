/** @jsx h */
import { h } from "preact";
import {Handlers} from '$fresh/server.ts';
import {useState} from 'preact/hooks';


export const handler:Handlers = {
  async GET(req,ctx){
    const res = await fetch("https://reqres.in/api/users?page=2");
    const user = await res.json();
    return ctx.render(user);
  }
}

export default function Home({data}) {
  const [nama,setNama] = useState("tololpage")
  if(!data){
    return <h1>ga ada datanya</h1>
  }
  return (
    <div > 
      <h1>jambe</h1>
      <h1>{nama}</h1>
    tolol
     {data.data.map((p)=>(
      <li>{p.id}</li>
     ))}
    </div>
  );
}
