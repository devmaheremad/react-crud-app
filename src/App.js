import React, { Component, Fragment } from 'react'
import CoursesAdd from './Components/CoursesAdd/CoursesAdd'
import CoursesList from './Components/CoursesList/CoursesList'
import './index.css';
class App extends Component {

    state = {
        courses: [
            {name: 'HTML/HTML5'},
            {name: 'CSS/CSS3'},
            {name: 'JavaScript'}
        ],
        newCourse: ''
    }

    // renderCourse
    renderCourse = () => {
        const {courses} = this.state
        let length = this.state.courses.length
        return (
            length ? (
                courses.map((course, index) => {
                    return (
                        <CoursesList courses={this.state.courses} key={index} courseName={course.name} courseIndex={index} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse} />
                    )
                })
            ) : (
                <div>
                    <h2>There are no courses here!</h2>
                </div>
            )
        )
    }

    // Add course to the list
    addCourse = (e) => {
        e.preventDefault()
        let {courses} = this.state
        let {newCourse} = this.state
        courses.push({name: newCourse})
        this.setState({
            courses,
            newCourse: ''
        })
    }

    // To save the entry of the new course
    handelChange = (e) => {
        let {newCourse} = this.state
        newCourse = e.target.value
        this.setState({
            newCourse
        })
    }

    // To delete the course when click on the delete btn
    deleteCourse = (indexClicked) => {
        let {courses} = this.state
        courses.splice(indexClicked, 1)
        this.setState({
            courses
        }) 
    }

    // To update the name of the course
    updateCourse = (index, newValue) => {
        let {courses} = this.state
        let course = courses[index]
        course.name = newValue
        this.setState({
            courses
        })
    }

    render() {

        return(
            <Fragment>
                <h1 className='text-center'>Crud App By React</h1>
                <CoursesAdd addCourse={this.addCourse} handelChange={this.handelChange} newCourse={this.state.newCourse} />
                <section className="courses-list">
                <div className="t-header">
                    <span className="id title">#</span>
                    <span className="course-name title">Course name</span>
                    <span className="action title">Action</span>
                </div>
                <ul className='list-unstyled'>
                    {this.renderCourse()}
                </ul>
                </section>
            </Fragment>
        )
    }
}

export default App;