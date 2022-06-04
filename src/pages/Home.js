import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Fallen MC - Főoldal'
  }, [])
  return (
    <div className='Home'>
        <h1>Hellóka gyerekek</h1>
    </div>
  )
}
