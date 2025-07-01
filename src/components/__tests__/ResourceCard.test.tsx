import { render, screen } from '@testing-library/react'
import React from 'react'
import ResourceCard from '../ResourceCard'

const mockResource: { description: string; id: string; title: string; category: string; url: string } = {
    id: '1',
    title: 'React Docs',
    description: 'Official React documentation',
    category: 'Frontend',
    url: 'https://reactjs.org',
}

describe('ResourceCard', () => {
    it('has a link to the resource', () => {
        render(<ResourceCard resource={mockResource} />)

        const url = screen.getByRole('url', { name: /visit resource/i })
        expect(url).toHaveAttribute('href', 'https://reactjs.org')
    })
})
