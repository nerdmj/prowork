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

    return (
      <div>
        <h2>{title}</h2>
        <b>Project Number: {projectNumber} </b>
        <div className="project-timeline">
          <strong>Start date: {startDate}</strong>
          <strong>Due Date: {dueDate}</strong>
        </div>
        <strong>Priority: {priority}</strong>
        <div><p>{description}</p></div>
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
