import useResources from '../hooks/useResources'
import { ResourceForm }  from '../components/ResourceForm'
import ResourceCard from '../components/ResourceCard'

export default function Home() {
    const { resources, addResource } = useResources()

    return (
        <main className="min-h-screen bg-cyan-100 flex flex-col items-center px-4 py-6 space-y-6">
            <h1 className="text-4xl font-bold">DevDeck</h1>
            <ResourceForm onAdd={addResource}/>
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((res) => (
                    <ResourceCard key={res.id} resource={res}/>
                ))}
            </div>
        </main>

    )
}
