import React from 'react';

export class Content extends React.Component{

    render(){
        return(
            <div>
                <h1>Welcome to my final year Data Rep Project!</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2> 
            </div>
        );
    }

}
/* created Content class to show of Content in app
created components folder and placed Content file in it */