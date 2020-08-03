import React, { Component } from 'react'
import style from './Header.module.scss'
import InputSearch from '../Customs/InputSearch'
import GapButton from '../Customs/GapButton'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={style.header_content}>
                <div className="row mx-0">
                    <div className="col-7">
                        <div className="row align-items-center">
                            <div className={style.header__logo}>
                                <a href="#">
                                    <img src="./asset/img/logo/logo.jpg" alt="" />
                                    <span>Shop Online</span>
                                </a>
                            </div>
                            <div className={style.navHeader}>
                                <span>Categories</span>
                            </div>
                            <div className = "flex-fill">
                                <InputSearch />
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <GapButton title = "Lịch sử  mua hàng"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
