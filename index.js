const number = 2

describe('Number', () => {
    test('is 2', () => {
        expect(number).toBe(2)
    })

    test('is even', () => {
        expect(number % 2).toBe(0)
    })
})

// -----------------------------------

import { mount } from '@vue/test-utils'

const Component = {
    template: '<div>Hello world</div>'
}

const ComponentWithProps = {
    template: '<div>{{ msg }}</div>',
    props: {
        msg: {
            type: String,
            required: true
        }
    }
}

describe('Mount example', () => {
    test('mounts a component with props', () => {
        const wrapper = mount(ComponentWithProps, {
            props: {
                msg: 'Hello world'
            }
        })

        expect(wrapper.html()).toCoctain('Hello world')
    })
})