import React from 'react';
import { connect } from "react-redux";
import projects from "../../../../db/projects.json";
import { Link } from 'react-router-dom';
import {compile} from 'path-to-regexp';

const MY_ROUTE = '/project/:projectId';
const toPath = compile(MY_ROUTE);

class ProjectDetail extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          ...initialState
      }
      this.handleChange = this.handleChange.bind(this);
  }

  clearState() {
      this.setState({...initialState})
  }

  handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
          [name]: value
      });
      this.handleSearch(value);
  }

  handleSearch(inputName) {
      var filteredItems = projects.filter(function(item) {
        return item.title.toLowerCase().includes(inputName.toLowerCase());
      });
      this.setState({
        projects: filteredItems
      });
  }

  render(){
      const { searchedString, projects } = this.state;
      return (
      <div className="project-listing">

        <div className="project-search">
           <input ref="name" placeholder="search by project name..." onChange={this.handleChange} />
        </div>

          {projects.map(pr => (
                <React.Fragment>
                <article className="project-timeline">
                <h3>
                    <Link to={toPath({ projectId:pr.number })}>{pr.title}</Link>
                </h3>
                <b>Project Number {pr.number}</b>
                <strong>Manager Name: {pr.manager.fullname}</strong>
                <section className="project-timeline">
                    <span className="start-date">Start Date: {pr.startdate} </span>
                    <span className="due-date">End Date: {pr.duedate}</span>
                </section>

                <div className="project-company">
                   <p>{pr.company.name}</p>
                </div>
              </article>
            </React.Fragment>
          ))}
      </div>
)
}

}

const initialState = {
    searchedString: 'search by project name...',
    projects
}

export default connect(null)(ProjectDetail);
