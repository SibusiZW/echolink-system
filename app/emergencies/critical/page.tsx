import { getCriticalEmergencies } from "@/server/emergencies"
import { BadgeAlert } from "lucide-react"

export default async function CriticalEmergenciesPage() {
    const emergencies = await getCriticalEmergencies();

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-gray-600">Critical Emergencies</h1>
            {emergencies.map(item => <div key={item.id} className="space-y-4 p-5 border border-red-800 rounded-md">
                <BadgeAlert className="text-red-800" size={30}/>
                <h1 className="text-gray-500 text-xl">{item.title}</h1>
                <p>
                    {item.description}
                </p>
                <span className="text-gray-500">Posted on: {new Date(item.created_at).toLocaleDateString()}</span>
            </div>)}
        </div>
    )
}