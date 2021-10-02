const Tasks = ({items}) => {
    return (
      <div>
        <ul>
          {items.map((item) => {
            const key = 'mKey' + item.id;
            return <Task key={key} item={item}/>
          })}
        </ul>
      </div>
    );
}

const Task = ({item}) => {
  const {done} = item;
  const color = done ? 'green' : 'red';

    return (
        <li style={{color: color}}>{item.text}</li>
    );
}

export default Tasks;