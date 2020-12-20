import React from 'react';
import { Teams } from './teams';

export class View extends React.Component{

    state = {
        teams: [{
        "constructorId":"alfa",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Alfa_Romeo_in_Formula_One",
        "name":"Alfa Romeo",
        "nationality":"Italian"},
        {
        "constructorId":"alphatauri",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_AlphaTauri",
        "name":"AlphaTauri",
        "nationality":"Italian"},
        {
        "constructorId":"ferrari",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari",
        "name":"Ferrari",
        "nationality":"Italian"},
        {
        "constructorId":"haas",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Haas_F1_Team",
        "name":"Haas F1 Team",
        "nationality":"American"},
        {
        "constructorId":"mclaren",
        "url":"http:\/\/en.wikipedia.org\/wiki\/McLaren",
        "name":"McLaren",
        "nationality":"British"},
        {
        "constructorId":"mercedes",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Mercedes-Benz_in_Formula_One",
        "name":"Mercedes",
        "nationality":"German"},
        {
        "constructorId":"racing_point",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_F1_Team",
        "name":"Racing Point",
        "nationality":"British"},
        {
        "constructorId":"red_bull",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing",
        "name":"Red Bull",
        "nationality":"Austrian"},
        {
        "constructorId":"renault",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One",
        "name":"Renault",
        "nationality":"French"},
        {
        "constructorId":"williams",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering",
        "name":"Williams",
        "nationality":"British"
    }]};

    render(){
        return(
            <div>
                <h1>Teams</h1>
                <Teams f1Teams={this.state.teams}></Teams>
            </div>
        );
    }

}
/* created View class to show of footer in app
created components folder and placed View file in it
Added team state from F1 Api online
added f1Teams JSX
Date:20/12/21 
(API To use at later stage)
https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328*/