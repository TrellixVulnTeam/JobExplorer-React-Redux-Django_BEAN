import React from 'react';
import JobSearchCardComponent from "./JobSearchCardComponent";
import "../styles/jobCard.css";

export default class JobSearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.jobs.length !== 0 ?

                        this.props.jobs.map(job =>
                            <JobSearchCardComponent
                                className="col-2"
                                getJobDetails={this.props.getJobDetails}
                                job={job}
                                key={job.id} />)
                        :
                        <h3>No Jobs found matching your criteria, search again!</h3>
                }
            </div>
        );
    }
}

