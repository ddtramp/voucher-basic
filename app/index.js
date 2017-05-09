// index.js
/*eslint-disable*/
import React from 'react';
import {render} from 'react-dom';
import Voucher from './Voucher';
/*eslint-enable*/
render(<Voucher
    currentEdit="0"
    subjectsUrl="static/data/subjects.json"

/>, document.getElementById('root'))

// isZyEditAble= { true }       // 摘要字段是否可以编辑
// isKjkmEditAble= { true }     // 会计科目字段是否可以编辑
// subjectsUrl="static/subjects.json" // 是否是异步获取科目表
