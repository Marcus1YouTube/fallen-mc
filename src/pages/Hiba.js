import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'

export default function Error() {
  useEffect(() => {
    document.title = '404: Nem található ez az oldal'
  }, [])
  return (
    <div className='Hiba'>
        <h1>Hiba történt: Nem találtuk ezt a címet!</h1>
        <img src='err.png' placeholder='Ez egy majom, amit a YouTube-ról loptam xd' title='Ez egy majom, amit a YouTube-ról loptam xd' alt='Ez egy majom, amit a YouTube-ról loptam xd'></img>
        <p>Micsoda tragédia! Hát ez hogy történhetett? <br /> Mindegy, ez a gomb segít visszatalálni a főoldalra! <big>🙂</big></p>
        <Link to='/'><Button variant='outline'>Vissza a főoldalra</Button></Link>
        
    </div>
  )
}
