import { getAnnouncements } from "@/server/announcements"
import { Divide, Megaphone } from "lucide-react"

export default async function AnnouncementsPage() {
    const announcements =  await getAnnouncements()

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-gray-600">Announcements</h1>
            
            {announcements?.map(item => <div className="p-8 mb-6 border rounded-xl border-blue-500" key={item.id}>
                <Megaphone className="text-blue-500" size={24}/>
                <h1 className="text-3xl font-semibold text-gray-500 mt-4">{item.title}</h1>
                <p>{item.description}</p>
                <span>
                    {new Date(item.created_at).toLocaleString()}
                </span>
            </div>)}
        </div>
    )
}