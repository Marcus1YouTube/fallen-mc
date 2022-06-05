import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from '@mantine/core'
import {
    MdArrowBack,
} from 'react-icons/md'
import { db } from '../firebase-config.js'
import { collection, getDocs } from 'firebase/firestore'
import parse from "html-react-parser";

export default function Announcements() {
    const [announcements, setAnnouncements] = useState([])
    const announcementsRefer = collection(db, 'bejelentesek')
    useEffect(() => {
        document.title = 'Fallen MC - Bejelentések'
    }, [])

    const getAnnouncements = async () => {
        const data = await getDocs(announcementsRefer)
        setAnnouncements(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        
    }
    getAnnouncements()
    announcements.reverse()

    return (
        <div className='Announcements'>
            <Link to='/'><Button variant='outline'><MdArrowBack className="btt-icon"/>Vissza a főoldalra</Button></Link>
            <h1>Bejelentések</h1>
            {announcements.map((announcement) => (
                <Card key={announcement.id} shadow="lg" p="lg">
                    <Card.Section  className='card'>
                        <h2>{announcement.title}</h2>
                        <hr />
                        {parse(announcement.content)}
                    </Card.Section>

                </Card>
            ))}
        </div>
    )
}
