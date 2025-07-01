import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import useResources from '../useResources';

const HookTestComponent: React.FC = () => {
    const { resources, loading, error } = useResources();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <ul>
            {resources.map((res) => (
                <li key={res.title}>{res.title}</li>
            ))}
        </ul>
    );
};

describe('useResources', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([
                        {
                            title: 'React Docs',
                            description: 'Official docs',
                            link: 'https://reactjs.org',
                            category: 'Frontend',
                        },
                    ]),
            }) as unknown as Promise<Response>
        );
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders fetched resources', async () => {
        render(<HookTestComponent />);

        await waitFor(() => {
            expect(screen.getByText('React Docs')).toBeInTheDocument();
        });
    });
});
