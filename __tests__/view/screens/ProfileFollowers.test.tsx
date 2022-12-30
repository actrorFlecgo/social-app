import React from 'react'
import {ProfileFollowers} from '../../../src/view/screens/ProfileFollowers'
import renderer from 'react-test-renderer'
// import {render} from '../../../../jest/test-utils'

describe('ProfileFollowers', () => {
  const mockedProps = {
    navIdx: [0, 0] as [number, number],
    params: {
      name: 'test name',
    },
    visible: true,
  }
  it('renders correctly', () => {
    const tree = renderer.create(<ProfileFollowers {...mockedProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})