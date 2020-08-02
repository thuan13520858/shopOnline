import React, { Component } from 'react'
import style from './Header.module.scss'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = {style.header_content}>
                <div className = {style.header__logo}>
                    <a href="#">
                        <img src="./asset/img/logo/logo.jpg" alt=""/>
                        <span>Shop Online</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Header
