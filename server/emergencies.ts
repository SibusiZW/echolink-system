'use server';
import { supabase } from "@/lib/supabase";
// Get Counts

export async function getAllEmergenciesCount() {
    const content = await supabase.from("emergencies").select("*", { count: 'exact', head: true })
    return content.count
}

export async function getCriticalEmergenciesCount() {
    const content = await supabase.from("emergencies").select("*", { count: 'exact', head: true }).eq('priority', 1)

    return content.count
}

export async function getEmergencies() {
    const { data, error } = await supabase.from("emergencies").select('*').order('created_at', { ascending: false })

    if (error) {
        return []
    }

    return data
}

export async function getCriticalEmergencies() {
    const { data, error } = await supabase.from("emergencies").select('*').eq('priority', 1).order('created_at', { ascending: false })

    if (error) {
        return []
    }

    return data
}

export async function deleteEmergency(id: any) {
    const { error } = await supabase.from('emergencies').delete().eq('id', id)

    if (error) { 
        return "Error"
    }
}