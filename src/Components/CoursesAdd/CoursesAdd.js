import React from 'react'
import './CoursesAdd.css'

const CoursesAdd = (props) => {
    return (
        <section className="courses-add">
            <form method="post" onSubmit={props.addCourse} onChange={props.handelChange}>
                <label htmlFor="coursename">
                <input type="text" id="coursename" placeholder='Type your course name here!' value={props.newCourse} required />
                </label>
                <input type="submit" value="Add!"/>
            </form>
        </section>
    )
}

export default CoursesAdd