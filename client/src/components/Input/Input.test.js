import React from 'react'
import Input from './Input'
import { shallow } from 'enzyme'


let input;

describe ('Input Component', () => {
    input = shallow(<Input />)

    beforeEach(() => {
        input.instance()
    })

    it('renders correctly', () => {
        expect(input).toBeDefined()
        expect(input).toMatchSnapshot()
    })

    describe('input element', () => {
        const inputElement = input.children().first()

        expect(inputElement.props().value).toBeUndefined()
    })
})