import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Drawer } from '@mantine/core'

export default function Home() {
  useEffect(() => {
    document.title = 'Fallen MC - Főoldal'
  }, [])

  const [open, setOpen] = useState(false)

  return (
    <div className='Home'>
        <h1>Üdvözlünk a főoldalon!</h1>
        <p>Itt lent találod az oldalakhoz a linkeket:</p>
        <Button variant='outline' onClick={() => setOpen(true)}>Linktár megnyitása</Button>
        <Drawer opened={open} onClose={() => setOpen(false)} title="Linktár" position='bottom' className="link-storage" transition="pop">
          <div className='links'>
            <Link to='/bejelentesek'><Button variant='outline'>Bejelentések</Button></Link>
          </div>
          

        </Drawer>
    </div>
  )
}
