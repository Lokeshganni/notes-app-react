const NoteItem = ({notesDetails}) => (
  <li>
    <h1>{notesDetails.title}</h1>
    <p>{notesDetails.note}</p>
  </li>
)
export default NoteItem
