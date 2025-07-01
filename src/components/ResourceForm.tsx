import React, { useState } from 'react'
import { Resource } from '../hooks/useResources'

interface ResourceFormProps {
    onAdd: (resource: Omit<Resource, 'id'>) => void
}

export const ResourceForm: React.FC<ResourceFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAdd({ title, url, description, category })
        setTitle('')
        setUrl('')
        setDescription('')
        setCategory('')
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-cyan-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full w-[460px]">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    Add New Resource
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 tracking-wide mb-1 uppercase">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. React Docs"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 tracking-wide mb-1 uppercase">
                            URL
                        </label>
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 tracking-wide mb-1 uppercase">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="What is this resource about?"
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 tracking-wide mb-1 uppercase">
                            Category
                        </label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="e.g. Frontend, Backend"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-md transition-colors"
                    >
                        + Add Resource
                    </button>
                </form>
            </div>
        </main>
    )
}
