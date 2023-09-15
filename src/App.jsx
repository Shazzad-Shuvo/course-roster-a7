
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);



  const handleSelect = (course) => {
    const match = selectedCourses.find(item => item.id === course.id);
    if (match) {
      return alert('duibar neya jabe na');
    }
    else {
      const newSelectedCourses = [...selectedCourses, course];
      setSelectedCourses(newSelectedCourses);
    }

  }
  console.log(selectedCourses);

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-5xl text-center font-bold mt-5 mb-3'>Course Registration</h1>
        <hr className='mb-5' />
        <div className='flex gap-5'>
          <Courses handleSelect={handleSelect}></Courses>
          <Cart selectedCourses={selectedCourses}></Cart>
        </div>
      </div>

    </>
  )
}

export default App
