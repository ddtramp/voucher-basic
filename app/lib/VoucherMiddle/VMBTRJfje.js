/**
 * Created by wangxichao on 08/03/2017.
 */
/*eslint-disable*/
import React, { Component } from 'react';
import Je from './Je';
import style from './VoucherMiddle.css';
/*eslint-enable*/
class VMBTRJfje extends Component {
    render () {
        return (
            <td className={ style.je }>
                <Je
                    ref="je"
                    je={ this.props.je }
                    editAble = { this.props.editAble.jfjeEditAble }
                    currentIndex= { this.props.currentIndex }

                    isJeInputShow={this.props.isJeInputShow }
                    direction={this.props.direction}
                    _jeInputOnBlur={this.props._jeInputOnBlur}
                    _jeInputChange={ this.props._jeInputChange }
                    _jeUlClick={ this.props._jeUlClick }
                    _jeInputKeyDown={ this.props._jeInputKeyDown }

                ></Je>
            </td>
        )
    }
}

export default VMBTRJfje
