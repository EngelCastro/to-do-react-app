import "./ToDoInput.css";

type Props = {
  onAddItem: Function;
  onChange: Function;
  inputText: string;
};

const ToDoInput = (props: Props) => {
  const { onAddItem, onChange, inputText } = props;

  return (
    <div className="to-do-input">
      <div className="container-input">
        <textarea
          value={inputText}
          onChange={(event) => onChange(event)}
          className="cl-input"
          rows={3}
          maxLength={250}
          wrap="soft"
          placeholder="Enter a task here.."
        />
      </div>
      <div className="container-button" onClick={() => onAddItem()}>
        <span className="cl-button">Add</span>
      </div>
    </div>
  );
};

export default ToDoInput;
