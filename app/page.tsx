import StatCard from "@/components/stats-card";
import { getAllAnnouncementsCount } from "@/server/announcements";
import { Megaphone } from "lucide-react";

export default async function HomePage() {
  const allAnnouncements = await (await getAllAnnouncementsCount())

  return (
    <div className="space-y-8">
      <h1 className="text-3xl text-gray-700 font-bold">Welcome to EchoLink!</h1>
      <p>This is the official, school-wide and emergency an announcements system of St Patrick's High</p>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="All Announcements" value={allAnnouncements.count} icon={<Megaphone className="text-blue-500" size={24}/>}/>
      </div>

    </div>
  );
}
