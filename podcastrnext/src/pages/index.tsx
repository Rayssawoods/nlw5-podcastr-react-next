import { useEffect } from "react"
import { Player } from "../components/Player"


export default function Home(props) {
  console.log(props.episodes)
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//Com SSR - busca os dados msm com Js Disable no Client side (Browser)
//SSG evita a constante requisição toda vez que um user acessa a home

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8 //a cada 8h
  }
}