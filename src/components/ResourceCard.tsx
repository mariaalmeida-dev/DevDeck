import React from 'react'
import { Resource } from '../hooks/useResources'

interface Props {
    resource: Resource
}

const ResourceCard: React.FC<Props> = ({ resource }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
            <a href={resource.url} className="text-teal-600 text-sm mt-2 inline-block hover:underline">
                Visit resource
            </a>
            <p className="text-xs text-gray-400 mt-2">Category: {resource.category}</p>
        </div>
    )
}

export default ResourceCard
