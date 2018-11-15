import React from 'react';
import GetClickableWord from "./GetClickableWord";
import PaginationTop from "../components/PaginationTop";
import { Link, Redirect } from 'react-router-dom';
function ModeContent(props) {
	return  !props.stepNum || !props.status  ?
		<Redirect to='/'/>
		:
			<div className="content-test">
				<div className="container">
					<p>Игрок: {props.playerName === null ? 'Анонимный игорк' : props.playerName } </p>
					<nav aria-label="Page navigation example" className='pagination-container'>
						{props.count === 10 ?
							<ul className="pagination justify-content-center">
								<PaginationTop numStep={props.stepNum} number='1'/>
								<PaginationTop numStep={props.stepNum} number='2'/>
								<PaginationTop numStep={props.stepNum} number='3'/>
								<PaginationTop numStep={props.stepNum} number='4'/>
								<PaginationTop numStep={props.stepNum} number='5'/>
								<PaginationTop numStep={props.stepNum} number='6'/>
								<PaginationTop numStep={props.stepNum} number='7'/>
								<PaginationTop numStep={props.stepNum} number='8'/>
								<PaginationTop numStep={props.stepNum} number='9'/>
								<PaginationTop numStep={props.stepNum} number='10'/>
							</ul>
							: props.count === 20 ?
								<ul className="pagination justify-content-center">
									<PaginationTop numStep={props.stepNum} number='1'/>
									<PaginationTop numStep={props.stepNum} number='2'/>
									<PaginationTop numStep={props.stepNum} number='3'/>
									<PaginationTop numStep={props.stepNum} number='4'/>
									<PaginationTop numStep={props.stepNum} number='5'/>
									<PaginationTop numStep={props.stepNum} number='6'/>
									<PaginationTop numStep={props.stepNum} number='7'/>
									<PaginationTop numStep={props.stepNum} number='8'/>
									<PaginationTop numStep={props.stepNum} number='9'/>
									<PaginationTop numStep={props.stepNum} number='10'/>
									<PaginationTop numStep={props.stepNum} number='11'/>
									<PaginationTop numStep={props.stepNum} number='12'/>
									<PaginationTop numStep={props.stepNum} number='13'/>
									<PaginationTop numStep={props.stepNum} number='14'/>
									<PaginationTop numStep={props.stepNum} number='15'/>
									<PaginationTop numStep={props.stepNum} number='16'/>
									<PaginationTop numStep={props.stepNum} number='17'/>
									<PaginationTop numStep={props.stepNum} number='18'/>
									<PaginationTop numStep={props.stepNum} number='19'/>
									<PaginationTop numStep={props.stepNum} number='20'/>
								</ul>
								: props.count == null ?
								<div>
									<h2>Марафон!</h2>
									<p>Отвечайте на вопросы, до первой ошибки!</p>
								</div>
								:
								<p>Не выбран режим</p>

						}
					</nav>

					<div className="words-container">
						<h5>Выберите букву над которой нужно поставить ударение </h5>
						<div className="words-p">
							{<GetClickableWord  word={props.question} index={props.getIndex} />}
						</div>
					</div>

					<div className="navigation-btn">
						<button onClick={() => props.prevWord()} className="btn btn-outline-secondary form-btn-back">Назад</button>
						<button onClick={() => props.nextWord()} className="btn btn-outline-secondary form-btn">Далее</button>
					</div>
					<Link className="btn btn-outline-secondary form-btn form-btn-back_menu" to='/'>Вернуться в главное меню</Link>
				</div>
			</div>

}

export default ModeContent;
