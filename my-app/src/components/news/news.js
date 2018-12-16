import React from "react";

import './news.css';


class News extends React.Component {

    /*
    Конструктор
     */
    constructor(props){
        super(props);
        this.state = {
            visible: false,
        }
    };

    /*
    Рендер дома
     */
    render() {
        const { items } = this.props;

        return items.length === 0 ?  <div>У вас нет новостей.</div> : this.renderContent();
    }


    /*
    * Функция вывода блока с новостями
     */
    renderContent(){
        return (
            <div>
                { this.renderNews() }
                <p>
                    У вас есть {this.props.items.length} новостей
                </p>
            </div>
        )
    };

    /*
    * Функция вывода новости
     */
    renderNews(){
        return this.props.items.map((item, index) => {
            return (
                <div className="card" key={item.id}>

                    <div className="card-header">
                        {item.title}
                    </div>

                    <div className="card-body">
                        { item.visible ? <div className={'news_full_desc'}>{item.full_desc}</div> : <div className={'news_desc'}>{item.desc}</div> }

                        <a href="#" onClick={ (e) => this.handleClick(e)}>
                            { item.visible ? 'Скрыть' : 'Подробнее' }
                        </a>
                    </div>

                </div>
            );
        })
    }

    /*
    * Обработка клика - скрыть/открыть
     */
    handleClick(e){
        e.preventDefault();

        this.setState({
            visible: !this.state.visible
        });
    }

}

export default News;