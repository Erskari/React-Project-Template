import './App.css'

function App() {
  const todoItems = [
    {
      id: 1,
      text: "Learn essential JS for React",
    },
    {
      id: 2,
      text: "Learn React Basics & Working with Components",
    },
    {
      id: 3,
      text: "Learn about React State & Working with Events",
    },
    {
      id: 4,
      text: "Learn to Render Lists & Conditional Content"
    },
  ];
  return (
    <>
      <div className="main">
          <div className='item'>
            <h1>My ToDo List</h1>
          </div>
          <div className="item">
              Hei
          </div>
          <div className="item">
              Hei
          </div>
      </div>
    </>
  )
}

export default App
