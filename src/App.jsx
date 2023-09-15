
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);



  const handleSelect = (course) => {
    const match = selectedCourses.find(item => item.id === course.id);
    let credit = course.credit;
    let price = course.course_price;


    if (match) {
      return alert('duibar neya jabe na');
    }
    else {
      selectedCourses.forEach(item => {
        credit = credit + item.credit;
        price = price + item.course_price;
      });

      const remaining = 20 - credit;
      if (credit > 20) {
        return alert('credit limit exceeded');
      }
      else {
        setRemainingCredit(remaining);
        setTotalCredit(credit);
        setTotalPrice(price);

        const newSelectedCourses = [...selectedCourses, course];
        setSelectedCourses(newSelectedCourses);
      }

    }

  }
  // console.log(selectedCourses);
  // console.log('remaining', remainingCredit);
  // console.log('total', totalCredit);

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-5xl text-center font-bold mt-5 mb-3'>Course Registration</h1>
        <hr className='mb-5' />
        <div className='flex gap-5'>
          <Courses handleSelect={handleSelect}></Courses>
          <Cart 
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
          remainingCredit={remainingCredit}
          totalPrice={totalPrice}
          ></Cart>
        </div>
      </div>

    </>
  )
}

export default App
