			<div className="button-div">
					<h5>Выберите режим</h5>
					<button type="button" className="btn btn-outline-secondary sort-btn">{this.state.bgMode ? 'Большой' : this.state.mrMode ? ' Марафон' : 'Обычный' }</button>
					{/*<button type="button" className="btn btn-outline-secondary form-btn">Большой Тест</button>*/}
					{/*<button type="button" className="btn btn-outline-secondary form-btn">Марафон</button>*/}
					<button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
					        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span className="sr-only">Toggle Dropdown</span>
					</button>
					<div className="dropdown-menu">
						<a className="dropdown-item" onClick={() => this.setState({bgMode: true, dfMode: false, mrMode: false})} href="#">Большой</a>
						<a className="dropdown-item" onClick={() => this.setState({mrMode: true,  dfMode: false, bgMode: false})} href="#">Марафон</a>
					</div>
					<span className="info-mode">20 вопросов</span>
				</div>
>

			componentDidUpdate(prevProps, prevState) {
				// Typical usage (don't forget to compare props):
				if (this.props.initialData !== prevProps.initialData) {
					let steps = this.props.initialData.steps;
					let arr = [];
					for (let i in steps){
						arr.push(steps[i])
					}
					arr.map(step => this.setState({num: step.num, question: step.question, status: step.index}));
				}

				if(this.state.num !== prevState.num){
					let labels = document.querySelectorAll(".letter-clicable input");
					for(let i=0; i<labels.length; i++)
						if (labels[i].checked) {
							labels[i].checked = false;
						}
				}
			}
