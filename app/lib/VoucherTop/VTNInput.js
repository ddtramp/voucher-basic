/**
 * Created by wangxichao on 07/03/2017.
 */
/*eslint-disable*/
import React, { Component } from 'react';
import style from './VoucherTop.css';
/*eslint-enable*/
class VTNInput extends Component {
    render () {
        var className = [
            style.inputStyle,
            (this.props.focus) ? style.inputStyleFocused : ''
        ]
        return (
            <div className={ className.join(' ') }>
                <input
                    type="text"
                    value={ this.props.v }
                    onFocus = { this.props._topNoFocus }
                    onBlur = { this.props._topNoBlur }
                    onChange={ this.props._topNoChange }
                />
            </div>
        )
    }
}

export default VTNInput
