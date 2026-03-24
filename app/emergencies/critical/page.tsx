import { getCriticalEmergencies } from "@/server/emergencies"
import { BadgeAlert } from "lucide-react"
import generateResponse from "@/server/gemini";

export default async function CriticalEmergenciesPage() {
    const emergencies = await getCriticalEmergencies();

    async function optimizedResponse(text: any) {
        const res = generateResponse(text)
        return res
    }

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-gray-600">Critical Emergencies</h1>
            {emergencies.map(item => <div key={item.id} className="bg-white space-y-4 p-5 border border-red-800 rounded-md">
                <BadgeAlert className="text-red-800" size={30}/>
                <h1 className="text-gray-500 text-xl">{item.title}</h1>
                <p>
                    {optimizedResponse(item.description)}
                </p>
                <span className="text-gray-500">Posted on: {new Date(item.created_at).toLocaleDateString()}</span>
            </div>)}
        </div>
    )
}