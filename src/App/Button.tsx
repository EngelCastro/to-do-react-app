// prop1: Recibia el onclick
// prop2: Recibia el texto

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
    >{props.children}</button>
  )
}

 