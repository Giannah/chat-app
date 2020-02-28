import Join from './Join'
import React from 'react'
import {shallow, mount} from 'enzyme'
import { BrowserRouter as Router, Route } from 'react-router-dom';


let join;

describe('Join Component', () => {
    
    beforeEach(() => {
        join = shallow(<Join />)
        join.instance()
    })

    it('renders correctly', () => {
        expect(join).toBeDefined()
        expect(join).toMatchSnapshot()
    })

    describe('Join outer container', () => {
        it('should have 1 child', () => {
            const child = join.find('.joinOuterContainer').children()
            expect(child).toHaveLength(1)
        })
    })

    describe('Join inner container', () => {
        it('should have 2 children', () => {
            const children = join.find('.joinInnerContainer').children()
            expect(children).toHaveLength(2)
            expect(children.find('.heading').exists())
        })

        describe('Inputs', () => {
            it('should be 2 of them', () => {
                const join = mount(<Router><Join /></Router>)

                const input = join.find('.joinInput')

                expect(input).toHaveLength(2)
            })
        })
    })
})
