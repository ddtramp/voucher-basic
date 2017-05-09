/**
 * Created by wangxichao on 21/03/2017.
 */
/*eslint-disable*/
import React, { Component } from 'react';

import style from './UnderWrapper.css';
/*eslint-enable*/
class UnderWrapper extends Component {
    render () {
        let className = [
            style.wrapper,
            (this.props.underWrapper ? '' : style.hidden)
        ]

        return (
            <div
                className={ className.join(' ') }
                onClick= { this.props._underWrapperClick }
            >
            </div>
        )
    }
}

export default UnderWrapper
