import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid'

export type Resource = {
    id: string;
    url: string;
    title: string;
    description: string;
    category: string;
};
export default function useResources() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('/api/resources')
            .then((res) => res.json())
            .then((data) => {
                setResources(data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    const addResource = (res: Omit<Resource, 'id'>) => {
        const newResource: Resource = { ...res, id: uuid() }
        setResources((prev) => [...prev, newResource])
    }

    return { resources, addResource, loading, error };
}

