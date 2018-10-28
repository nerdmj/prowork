import React from 'react';
import JSONProjects from '../../../../db/projects';

export default class ProjectListing extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          ...initialState
      }
  }

  componentDidMount () {
     const projects = JSONProjects;
     const { projectId } = this.props.match.params;
     // find if any user matches login credentials
     let selectedProject = projects.filter(project => {

         return project.number === projectId;
     });

     if (selectedProject.length) {
         let project = selectedProject[0];
         let projectDetail = {
             title: project.title,
             projectNumber: project.number,
             startDate: project.startdate,
             dueDate: project.duedate,
             priority:project.priority,
             description:project.description,
             timeAllocated:project.timeallocated,
         };

         this.setState({
           ...projectDetail
         })
     }


  }

  render(){

    const { title, projectNumber, startDate, dueDate, priority, description, timeAllocated} = this.state;
    let priorityText = '';
    switch (priority) {
      case 1:
         priorityText = 'Very Low';
        break;
      case 2:
         priorityText = 'Low';
        break;
      case 3:
         priorityText = 'Medium';
        break;
      case 4:
         priorityText = 'High';
        break;
      case 5:
         priorityText = 'Very High';
        break;
      default:

    }

    return (
      <div className="project_detail">

        <h2>{title}</h2>
        <div className="project_info">
          <strong>Priority: {priorityText}</strong>
          <b>Project Number: {projectNumber} </b>
        </div>
        <div className="project_timeline">
          <span className="start_date">Start Date: {startDate} </span>
          <span className="due_date">End Date: {dueDate}</span>
        </div>

        <div className="project_description">
          <span>Project Description: </span>
          <p>{description}</p>
          </div>

      </div>
    )
  }
}

const initialState = {
    title: '',
    projectNumber: '',
    startDate: '',
    dueDate: '',
    priority:'',
    description:'',
    timeAllocated:''
}
