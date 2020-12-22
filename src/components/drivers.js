import React from 'react';
import {DriverItem} from './driverItem';

export class Drivers extends React.Component{

    render(){
        return this.props.f1Drivers.map( (driver)=>{
            return <DriverItem driver={driver}></DriverItem>
        })
    }
}
/* created add driver class to show of add drivers in app
created components folder and placed add file in it */