import React from "react";

import Toogle from '../toogle/toogle';

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
                <div className="card" key={index}>

                    <div className="card-header">
                        {item.title}
                    </div>

                    <div className="card-body">
                        {item.desc}

                        <Toogle>
                            <p>
                                {'Полное описание..'}
                            </p>
                        </Toogle>

                    </div>

                </div>
            );
        })
    }


}

export default News;