import { supabase } from "@/lib/supabase";

// Get Counts
export async function getAllAnnouncementsCount() {
    const count = await supabase.from("announcements").select("*", { count: 'exact', head: true })
    return count
}

export async function getSpecificAnnouncementsCount() {

}