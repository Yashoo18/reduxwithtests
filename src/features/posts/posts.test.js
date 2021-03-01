/*import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('loads and displays users', async () => {
render(<Fetch url="/posts" />)

fireEvent.click(screen.getByTestID('Save Posts'))

await waitFor(() => screen.getByRole('heading'))

expect(screen.getByRole('heading')).toHaveTextContent({content})
expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test('handles server error', async () => {
server.use(
rest.get('/posts', (req, res, ctx) => {
return res(ctx.status(500))
})
)

render(<Fetch url="/fakeApi/users" />)

fireEvent.click(screen.getByText('Load Greeting'))

await waitFor(() => screen.getByRole('alert'))

expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})*/