import React from 'react';
import {Link} from "react-router-dom";


function ErroPage(props) {
	document.body.style.backgroundColor = "#fff";
	document.querySelector('title').innerHTML = 'Страница не найдена';

	return(
		<div className="error-container">
			<div className="container-fluid">
				<div className="error-content" >
				</div>
				<Link className="btn btn-outline-secondary form-btn form-btn-back_menu" to='/'>Вернуться в главное меню</Link>
			</div>
		</div>
	)

}

export default ErroPage;

