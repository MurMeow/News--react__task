import React ,{Component ,Fragment} from "react";
import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import News from "./pages/news/news";
import Post from "./pages/news/post";
import Login from "./pages/authorization/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/authorization/profile";


export default class Index extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Fragment>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/dist/" component={Content} />
                        <Route exact path="/dist/news/" component={News} />
                        <Route exact path="/dist/login/" component={Login} />
                        <Route exact path="/dist/profile/" component={Profile} />
                        <Route exact path="/dist/post/" component={Post} />
                    </Switch>

                    <Footer />
                </BrowserRouter>
            </Fragment>
        )
    }

}



