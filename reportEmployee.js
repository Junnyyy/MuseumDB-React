//import { response } from 'express';
import React, {component} from 'react';

class ReportEmployee extends component{
    constructor(props){
        super(props)
            this.state={
                records: []
            }
    }

    componentDidMount(){
        fetch() //fetches url with info submitted
        .then(response => response.json()) //modified to get json file list 
        .then(records => {
            this.setState({
                records: records
            })
        })
        .catch(error => console.log(error))
    }

    renderReport(){
        let recordReport= []
        this.state.records.map(record => {
            return recordList.push(`<li key= {record.id'} > {record.name}</li>`)
        })
        return recordList;
    }

    render(){
        return(
            `<ul>
            {this.renderReport()}
            </ul>`
        );
    }
    
}
export default ReportEmployee;