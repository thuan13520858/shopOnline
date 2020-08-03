import React, { Component } from 'react'
import style from './GapButton.module.scss'

class GapButton extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className ={style.gap_button}>
                <a href="">
                    <p>{this.props.headerTitle}</p>
                    <p>{this.props.title}</p>
                </a>
            </div>
        )
    }
}

export default GapButton
