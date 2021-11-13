import React, { useState } from 'react'

function App() {
  const [Obj, setObj] = useState({ row: 1, col: 1, category: 'orange', color: '#27b4aa' })
  const [Myobj, setMyobj] = useState([])
  // console.log(Obj)
  var matrix = [];
  for (var i = 0; i < Obj.row; i++) {
    matrix[i] = [];
    for (var j = 0; j < Obj.col; j++) {
      matrix[i][j] = '#a6a6a6';
    }
  }
  // console.log(Myobj)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Techolution</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '45%', minHeight: '500px', backgroundColor: '#f8f8fa' }}>
          {matrix.map((row, rindex) => {
            return <div style={{ display: 'flex' }}>
              {row.map((cell, cindex) => {
                return <div key={'' + rindex + cindex} id={'' + rindex + cindex} style={{ width: '40px', height: '50px', margin: '5px', borderRadius: '5px', backgroundColor: '#a6a6a6', color: 'white', textAlign: 'center', cursor: 'copy' }} onClick={() => {
                  // console.log(rindex, cindex)
                  // change background color
                  document.getElementById('' + rindex + cindex).style.backgroundColor = Obj.color;
                  document.getElementById('' + rindex + cindex).style.cursor = 'no-drop';
                  var newarray = [...Myobj, `(${rindex}, ${cindex})`]
                  setMyobj([...new Set(newarray)])
                }}>{rindex + ',' + cindex}</div>;
              })}
            </div>
          })}
        </div>
        <div style={{ width: '45%', minHeight: '500px', backgroundColor: '#f8f8fa', textAlign: 'left' }}>
          <form onSubmit={(e) => {
            e.preventDefault();
            // console.log('submit');
          }}>
            <h2>Enter Rows</h2>
            <input type="number" placeholder="row" min="1" max="50" value={Obj.row} onChange={e => setObj({ ...Obj, row: +e.target.value })} />
            <h2>Enter Colums</h2>
            <input type="number" placeholder="colums" min="1" max="50" value={Obj.col} onChange={e => setObj({ ...Obj, col: +e.target.value })} />
            <h2>Name a Category</h2>
            <input type="text" placeholder="Category" value={Obj.category} onChange={e => setObj({ ...Obj, category: e.target.value })} />
            <h2>Box Color</h2>
            <input type="color" placeholder="color" value={Obj.color} onChange={e => setObj({ ...Obj, color: e.target.value })} />
          </form>
        </div>
      </div>
      <div>
        <h1>Your Items</h1>
        <p>{Myobj}</p>
      </div>
    </div>
  );
}

export default App;
