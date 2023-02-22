import {CiSearch} from 'react-icons/ci'
import {BsPlusLg} from 'react-icons/bs'

import { Link } from 'react-router-dom'

import NoteItem from '../components/NoteItem'
import { useState } from 'react'

const Notes = ({notes}) => {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <section>
        <header className="notes__header">
            {!showSearch && <h2>My Notes</h2>}
            { showSearch && <input type="text" autoFocus placeholder='Keyword...' />}
            <button 
              className='btn'
              onClick={() => setShowSearch(prevState => !prevState)}
            ><CiSearch/></button>
        </header>
        <div className="notes__container">
          {
            notes.map(note => <NoteItem key={note.id} note={note} />)
          }    
        </div>
        <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes