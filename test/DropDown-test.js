import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import DropDown from '../app/lib/DropDown/DropDown';

const props = {
    ref: "DropDown",
    subjectList: [],
    currentIndex: 0,
    DropDownShow: {
        all: false,
        selectArea: false
    },
    dropDownCurrentIndex: 0,
    dropDownTextareaValue: "",
    _kjkmEditTextareaBlur: () => {},
    _kjkmEditTextareaChange: () => {},
    _kjkmEditTextareaKeydown: () => {},
    _liOnMouseDown: () => {},
    KjkmPositionStyles: {}
};

describe("A suite", function() {
    // it("contains spec with an expectation", function() {
    //     expect(shallow(<DropDown />).contains(<div className="foo" />)).to.equal(true);
    // });
    //
    // it("contains spec with an expectation", function() {
    //     expect(shallow(<DropDown />).is('.kjkmEdit')).to.equal(true);
    // });


    it("测试 Visual Dom name", function() {
        const wrapper = shallow(<DropDown {...props} />);
        expect(wrapper.name()).to.equal('div');
    });

    it("测试 Visual Dom len", function() {
        const wrapper = shallow(<DropDown {...props} />);
        expect(wrapper.find('span').length).to.equal(1);
        expect(wrapper.find('.newSubject').length).to.equal(1);
    });
});
