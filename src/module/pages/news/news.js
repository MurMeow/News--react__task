import React ,{Component} from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import Article from './article';
import { Redirect } from "react-router-dom";
import {addNews} from '../../store/action';

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            redirect: false
        };
    }

    componentDidMount() {
      console.log(this.props)
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(data => data.json())
            .then((items) => {this.setState({ articles: items})})
            .then(()=>{this.recordNewsToStore()})
    }

    isAuthorization = (prop)=>{
        if(this.props.Authorization.authorization){
           return  prop
        }
        else{
          return   ""
        }
    };

    onClickReadNews =()=>{
      this.setState({ redirect: true })
    };

   recordNewsToStore = () =>{
     this.state.articles.map((article,index)=>{
       this.props.addNews(
         article.title,
         article.body,
         article.id,
         article.userId
       )
     })

    };


    render() {
      const { redirect} = this.state;
      if(redirect && !this.props.Authorization.authorization){
        alert("Войдите в свой профиль")
        return (
        <Redirect to='/dist/login'>
        </Redirect>)
      }
      else if(redirect && this.props.Authorization.authorization){
        return (
        <Redirect to='/dist/post'>
        </Redirect>)
      }

      return (
        <div>
          <h2>Последние новости</h2>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
              this.state.articles.map((article, index) =>
                <Article key={index}
                         title={article.title}
                         body={this.isAuthorization(article.body)}
                         id={article.id}
                         userId={article.userId}
                         eventClick={this.onClickReadNews}
                />
              )
            }
          </div>
        </div>
      );
    }
}

const mapStateToProps = (store) => {
    return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addNews:addNews,
  //
  // title: title,
  // body: body,
  // id: id,
  // userId: userId
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps ) (News);
