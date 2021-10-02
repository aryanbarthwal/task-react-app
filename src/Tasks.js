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

    return (
        <li>{item.text}</li>
    );
}

export default Tasks;