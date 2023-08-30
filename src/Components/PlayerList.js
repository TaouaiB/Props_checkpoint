import React from 'react'
import PlayersRaw from '../players'
import PlayersCards from './Player'


const PlayerList = ()=>{
  return (
    <div>
        {PlayersRaw.map(joueur=><PlayersCards joueur={joueur} key={joueur.id} />)}
    </div>
  )
}


export default PlayerList