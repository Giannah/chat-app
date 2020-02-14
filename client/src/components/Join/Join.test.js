import Join from './Join'
import React from 'react'
import {shallow} from 'enzyme'

let join;

describe('Join Component', () => {
    join = shallow(<Join />)

    beforeEach(() => {
        join.instance()
    })

    it('renders correctly', () => {
        expect(join).toBeDefined()
        expect(join).toMatchSnapshot()
    })

    describe('Join inner container', () => {
        it('should have 2 children', () => {
            const children = join.find('.joinInnerContainer').children()
            expect(children).toHaveLength(2)
        })
    })
})
