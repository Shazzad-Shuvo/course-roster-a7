
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Swal from 'sweetalert2';


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
      // return alert('duibar neya jabe na');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Course already in cart!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
    else {
      selectedCourses.forEach(item => {
        credit = credit + item.credit;
        price = price + item.course_price;
      });

      const remaining = 20 - credit;
      if (credit > 20) {
        // return alert('credit limit exceeded');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "You don't have sufficient credit for the course!",
          footer: '<a href="">Why do I have this issue?</a>'
        })
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

  return (
    <>
      <div className='bg-zinc-100'>
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
      </div>

    </>
  )
}

export default App
