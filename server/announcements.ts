'use server';
import { supabase } from "@/lib/supabase";

// Get Counts
export async function getAllAnnouncementsCount() {
    const content = await supabase.from("announcements").select("*", { count: 'exact', head: true })
    return content.count
}

export async function getImportantAnnouncementsCount() {
    const content = await supabase.from("announcements").select("*", { count: 'exact', head: true }).eq('priority', 1)
    return content.count
}

// CRUD

// Read
export async function getAnnouncements() {
    const { data, error } = await supabase.from("announcements").select('*').order('created_at', { ascending: false })
    
    if (error) {
        return []
    }

    return data
}

export async function getImportantAnnouncements() {
    const { data, error } = await supabase.from("announcements").select('*').eq('priority', 1).order('created_at', { ascending: false })
    
    if (error) {
        return []
    }

    return data
}

export async function deleteAnnouncement(id: any) {
    const { error } = await supabase.from('announcements').delete().eq('id', id)

    if (error) { 
        return "Error"
    }
}