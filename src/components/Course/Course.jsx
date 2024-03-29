import { FaDollarSign } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';

const Course = ({ course, handleSelect }) => {
    const {image, course_name, credit, course_price, course_details} = course;
    return (
        <div>
            <div className="card bg-base-100 shadow-lg rounded-lg border mb-5 h-[450px]">
                <figure><img className="p-3" src={image} alt="Course Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course_name}</h2>
                    <p>{course_details}</p>
                    <div className='flex'>
                        <p className='flex items-center text-sm'><FaDollarSign></FaDollarSign> <span>Price: {course_price}</span></p>
                        <p className='flex items-center gap-2 text-sm'> <BsBook></BsBook> <span> Credit: {credit} hr</span> </p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleSelect(course)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;