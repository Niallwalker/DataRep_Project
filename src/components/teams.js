import React from 'react';
import {TeamItem} from './teamItem';

export class Teams extends React.Component{

    render(){
        return this.props.f1Teams.map( (team)=>{
            return <TeamItem team={team}></TeamItem>
        })
    }
}
/* created add class to show of add class in app
created components folder and placed add file in it */