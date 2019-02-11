import React from "react";
import {connect} from "react-redux";
import News from "../news/news";

function mapStateToProps(state) {
    console.log(state);
    return {
        user: state
    }
}

class App extends React.Component {

    /*
    * Конструктор
    * Вызывается первым делом
     */
    constructor(props) {
        super(props);

        /*
        * Массив с новостями
         */
        this.state = {
            news: [
                {
                    id: 1,
                    title:'Новость номер 1',
                    desc: 'Описание номер 1',
                    full_desc: 'Полное описание номер 1',
                    visible: false,
                },
                {
                    id: 2,
                    title: 'Новость номер 2',
                    desc: 'Описание номер 2',
                    full_desc: 'Полное описание номер 2',
                    visible: false,
                },
                {
                    id: 3,
                    title: 'Новость номер 3',
                    desc: 'Описание номер 3',
                    full_desc: 'Полное описание номер 3',
                    visible: false,
                }
            ]
        };
    }

    /*
    * Выполняется вторым
     */
    componentWillMount(){
        console.log('###: componentWillMount');
    }


    /*
    * Вывод
    * Выполняется третьим
    *
     */
    render(){
        console.log('###: render');
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">Новости</div>
                    <p className="lead">
                        Меня зовут {this.props.user}
                    </p>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Заголовок</label>
                            <input className="form-control" type="text" id="title" ref={ (inputtitle) => { this.inputNewsTitle = inputtitle; }}/><br/>
                            <label>Анонс</label>
                            <input className="form-control" type="text" id="desc" ref={ (inputdesc) => { this.inputNewsDesc = inputdesc; }}/><br/>
                            <label>Полный текст</label>
                            <input className="form-control" type="text" id="full_desc" ref={ (inputfulldesc) => { this.inputNewsFullDesc = inputfulldesc; }}/><br/>
                            <button className="btn btn-primary btn-block" onClick={ () => this.handleClick() }>
                                Добавить новость
                            </button>
                        </div>
                    </div>

                </div>

                <News items={this.state.news} />
            </div>
        )
    }

    /*
    * Выполняется после рендера всего дом дерева, четвертым
    * Что то добавит после рендера
     */
    componentDidMount(){
        console.log('###: componentDidMount');
    }

    componentWillUpdate(){
        console.log('###: componentWillUpdate');
    }

    /*
    После рендера случился апдейт
     */
    componentDidUpdate(nextProps, nextState){
        console.log('###: componentDidUpdate', nextState);

        if(!nextState.visible){
            this.setState({
               visible: true
            });
        }

    }

    /*
    После рендера случился апдейт
     */
    componentWillUnMount(){
        console.log('###: componentWillUnmount');
    }



    /*
    * Обработка клика - Добавить новость
     */
    handleClick(){
        let {news} = this.state;

        if(!this.inputNewsTitle.value){
            alert('Введите заголовок');
            return false;
        }

        if(!this.inputNewsDesc.value){
            alert('Введите анонс');
            return false;
        }

        if(!this.inputNewsFullDesc.value){
            alert('Введите полное описание');
            return false;
        }

        news.push({
           title: this.inputNewsTitle.value,
            desc: this.inputNewsDesc.value,
            full_desc: this.inputNewsFullDesc.value
        });

        // Обнуляем значение формы
        this.inputNewsTitle.value = '';
        this.inputNewsDesc.value = '';
        this.inputNewsFullDesc.value = '';

        // Задаем фокус на форму
        this.inputNewsTitle.focus();
        // Пишем состояние новости
        this.setState(news);

    }
}

export default connect(mapStateToProps)(App);