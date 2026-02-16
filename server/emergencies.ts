import { supabase } from "@/lib/supabase";
// Get Counts

export async function getAllEmergenciesCount() {
    const content = await supabase.from("emergencies").select("*", { count: 'exact', head: true })
    return content.count
}