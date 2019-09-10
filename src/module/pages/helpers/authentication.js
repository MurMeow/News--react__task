import React ,{Fragment}  from "react";
import {Link} from "react-router-dom";



let logIn = (store) => {
	let	profileView = store.Authorization.authorization;
		if(profileView){
			return <Link to={"/dist/profile"}>Профиль</Link>
		}else{
			return<Link to={"/dist/login"}>Профиль</Link>
		}
};


export default logIn
