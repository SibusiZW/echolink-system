import { getAnnouncements } from "@/server/announcements"
import generateResponse from "@/server/gemini"
import { Megaphone } from "lucide-react"

export default async function AnnouncementsPage() {
    const announcements =  await getAnnouncements()

    async function optimizedResponse(text: any) {
        const res = await generateResponse(text)
        return res
    }

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-gray-600">Announcements</h1>
            {announcements.map(item => <div key={item.id} className="bg-white space-y-4 p-5 border border-blue-500 rounded-md">
                <Megaphone className="text-blue-500" size={30}/>
                <h1 className="text-gray-500 text-xl">{item.title}</h1>
                <p>
                    {optimizedResponse(item.description)}
                </p>
                <span className="text-gray-500">Posted on: {new Date(item.created_at).toLocaleDateString()}</span>
            </div>)}
        </div>
    )
}