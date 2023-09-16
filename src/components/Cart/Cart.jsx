

const Cart = ({ selectedCourses, totalCredit, remainingCredit, totalPrice }) => {


    return (
        <div>
            <div className=" bg-base-100 shadow-lg rounded-lg p-6 mb-5">
                <h2 className="text-lg font-semibold text-blue-600 mb-4">Credit hour remaining: <span>{remainingCredit}</span> hr</h2>
                <hr />
                <h2 className="text-xl font-semibold my-4">Course Name</h2>
                <ol className="mb-4">
                    {
                        selectedCourses.map((course, idx) => <li key={course.id}>{idx + 1}. {course.course_name}</li>)
                    }
                </ol>
                <hr />
                <h4 className="my-4 font-semibold">Total Credit Hour: {totalCredit}</h4>
                <hr />
                <h4 className="mt-4 font-semibold">Total Price: {totalPrice}</h4>
            </div>
        </div>

    );
};

export default Cart;



