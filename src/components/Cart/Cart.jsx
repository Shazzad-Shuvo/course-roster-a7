

const Cart = ({ selectedCourses }) => {

    return (
        <div className="card bg-base-100 shadow-lg rounded-lg border w-3/12 p-6">
            <h2 className="text-xl font-semibold text-blue-600">Credit hour remaining: <span></span> hr</h2>
            <hr />
            <h2 className="text-xl font-semibold">Course Name</h2>
            <ol>
                {
                    selectedCourses.map((course, idx) => <li key={course.id}>{idx + 1}. {course.course_name}</li>)
                }
            </ol>
            <hr />
            <h4>Total Credit Hour</h4>
            <hr />
            <h4>Total Price</h4>
        </div>
    );
};

export default Cart;