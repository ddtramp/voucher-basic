/**
 * Created by wangxichao on 07/03/2017.
 */
/*eslint-disable*/
import React, { Component } from 'react'
import style from './VoucherTop.css'
/*eslint-enable*/
class VTAInput extends Component {
    render () {
        let className = [
            style.inputStyle,
            (this.props.focus) ? style.inputStyleFocused : ''
        ]
        return (
            <div className={ className.join(' ') }>
                <input
                    type="text"
                    value={ this.props.v }
                    onFocus = { this.props._topAccessoryFocus }
                    onBlur= { this.props._topAccessoryBlur }
                    onChange = { this.props._topAccessoryChange }

                />
            </div>
        )
    }
}

export default VTAInput
