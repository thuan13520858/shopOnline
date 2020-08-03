import React, { Component } from 'react'
import style from './InputSearch.module.scss'

class InputSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = {`d-flex align-items-center ${style.input_search}`}>
                <button>
                    <i class="fa fa-search"></i>
                </button>
                <input className = "w-100 ml-2" type="text" placeholder = "Search for anything"/>
            </div>
        )
    }
}

export default InputSearch
