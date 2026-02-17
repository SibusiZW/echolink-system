import StatCard from "@/components/stats-card";
import { getAllAnnouncementsCount, getImportantAnnouncementsCount } from "@/server/announcements";
import { getAllEmergenciesCount, getCriticalEmergenciesCount } from "@/server/emergencies";
import { BadgeAlert, Megaphone, OctagonAlert, Shield } from "lucide-react";

export default async function HomePage() {
  const announcementsCount = await getAllAnnouncementsCount()
  const importantAnnouncementsCount = await getImportantAnnouncementsCount()
  const emergenciesCount = await getAllEmergenciesCount()
  const criticalEmergenciesCount = await getCriticalEmergenciesCount()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl text-gray-700 font-bold">Welcome to EchoLink!</h1>
      <p>This is the official, school-wide and emergency an announcements system of St Patrick's High School</p>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="All Announcements" value={announcementsCount} icon={<Megaphone className="text-blue-500" size={24}/>}/>
        <StatCard title="Important Announcements" value={importantAnnouncementsCount} icon={<Shield className="text-orange-500" size={24}/>}/>
        <StatCard title="All Emergencies" value={emergenciesCount} icon={<OctagonAlert className="text-red-500" size={24}/>}/>
        <StatCard title="Critical Emergencies" value={criticalEmergenciesCount} icon={<BadgeAlert className="text-red-800" size={24}/>}/>
      </div>

    </div>
  );
}
