import React, { useContext } from "react";
import Gif from "../../components/Gif/Gif";
import GifsContext from "../../context/GifsContext";

export default function Detail ({params}) {

  const { gifs } = useContext(GifsContext)
  const gif = gifs.find(g => g.id === params.id)

  return <Gif {...gif} />

}