import React from "react";


class Toogle extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {
        return(
            <div className={'news_full_desc'}>
                <a href="#" onClick={ (e) => this.handleClick(e)}>
                    { this.state.visible ? 'Скрыть' : 'Подробнее' }
                </a>
                { this.state.visible ? this.props.children : null }
            </div>
        )
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

export default Toogle;