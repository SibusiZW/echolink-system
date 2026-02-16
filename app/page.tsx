import { getAllAnnouncementsCount } from "@/server/announcements";

export default async function HomePage() {
  const announcementsCount = await getAllAnnouncementsCount()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl text-gray-700 font-bold">Welcome to EchoLink!</h1>
      <p>This is the official, school-wide and emergency an announcements system of St Patrick's High</p>
      
    </div>
  );
}
