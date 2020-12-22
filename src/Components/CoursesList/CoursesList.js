import React, {Component} from 'react'
import './CoursesList.css'
class CoursesList extends Component {
    state = {
        isEdit: false
    }

    updateCourseItem = (e) => {
        e.preventDefault()
        this.props.updateCourse(this.props.courseIndex, this.input.value)
        this.toggleEdit()
    }

    editCourse = () => {
        return(
            <form className='update-coures' method="post" onSubmit={this.updateCourseItem}>
                <input type="text" defaultValue={this.props.courseName} ref={(v) => {this.input = v}}/>
                <button className='edit-btn'>Update Course</button>
            </form>
        )
    }

    toggleEdit = () => {
        let {isEdit} = this.state
        this.setState({
            isEdit: !isEdit
        })
    }

    render () {
        let {isEdit} = this.state
        return (
            isEdit ? this.editCourse() : (
                <li key={this.props.courseIndex}>
                    <span className='id'>{this.props.courseIndex}</span>
                    <span className='course-name'>{this.props.courseName}</span>
                    <span className='action'>
                        <button className='edit-btn' onClick={() => {this.toggleEdit()}}>Edit</button>
                        <button className='delete-btn' onClick={() => {this.props.deleteCourse(this.props.courseIndex)}}>Delete</button>
                    </span>
                </li>
            )
        )   
    }
}

export default CoursesList