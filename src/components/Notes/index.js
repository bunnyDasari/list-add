// Write your code here
import {useState} from 'react'

import uuidv4 from 'react'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [text, setTitle] = useState('')
  const [text1, setNote] = useState('')
  const [list, setData] = useState([])

  const onChangeEvent = event => {
    setTitle(event.target.value)
  }
  const onChangeEvent1 = event => {
    setNote(event.target.value)
  }

  const onClickEvent = event => {
    event.preventDefault()
    const dataObj = {
      id: uuidv4(),
      text,
      text1,
    };
    setData(prevData => [...prevData, dataObj])
    setTitle('')
    setNote('')
  };
  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={onClickEvent}>
        <input type="text" placeholder="Title" onChange={onChangeEvent} />
        <input
          type="text"
          placeholder="Take a Note"
          onChange={onChangeEvent1}
        />
        <button>Add</button>
      </form>
      {list.map(eachList => (
        <NoteItem key={eachList.id} listDetails={eachList} />
      ))}
    </div>
  )
}
export default Notes
