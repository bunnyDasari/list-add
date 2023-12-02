// Write your code here

const NoteItem = props => {
  const {listDetails} = props
  const {text, text1} = listDetails
  return (
    <div>
      <h1>{text}</h1>
      <p>{text1}</p>
    </div>
  )
}
export default NoteItem
