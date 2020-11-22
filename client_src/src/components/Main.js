import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Members from './Members';
import About from './About';
import MemberDetails from './MemberDetails';
import AddMember from './AddMember';
import EditMember from './EditMember';


const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Members} />
                <Route exact path="/about" component={About} />
                <Route exact path="/members/add" component={AddMember} />
                <Route exact path="/members/edit/:id" component={EditMember} />
                <Route exact path="/members/:id" component={MemberDetails} />
            </Switch>
        </main>
    )
}

export default Main;