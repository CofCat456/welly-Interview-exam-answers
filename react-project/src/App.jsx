import { useCallback, useState } from 'react'
import './App.css'

import Count from './components/Count';

function App() {
  const [isShowCircle, setIsShowCircle] = useState(false)

  const toggleShowCircle = useCallback(() => {
    setIsShowCircle((preStatus) => !preStatus)
  }, [])

  return (
    <>
      {/* 問題四 */}
      <div className="card">
        {
          isShowCircle ? (
            <div className="circle circle--blue" />
          ) : (
            <div className="circle circle--red" />
          )
        }
        <button onClick={toggleShowCircle}>
          Toggle Show
        </button>
      </div>

      {/* 問題五 */}
      <div className="card">
        <Count />
      </div >
    </>
  )
}

export default App
