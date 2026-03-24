import { getEmergencies } from "@/server/emergencies"
import { OctagonAlert } from "lucide-react"
import generateResponse from "@/server/gemini";

export default async function EmergenciesPage() {
    const emergencies = await getEmergencies();

    async function optimizedResponse(text: any) {
        const res = await generateResponse(text)
        return res
    }

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-gray-600">Emergencies</h1>
            {emergencies.map(item => <div key={item.id} className="bg-white space-y-4 p-5 border border-red-500 rounded-md">
                <OctagonAlert className="text-red-500" size={30}/>
                <h1 className="text-gray-500 text-xl">{item.title}</h1>
                <p>
                    {optimizedResponse(item.description)}
                </p>
                <span className="text-gray-500">Posted on: {new Date(item.created_at).toLocaleDateString()}</span>
            </div>)}
        </div>
    )
}