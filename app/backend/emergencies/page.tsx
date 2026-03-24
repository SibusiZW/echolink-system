import AddEmButton from "@/components/dialogs/add-em-button";
import DeleteAnnButton from "@/components/dialogs/delete-ann-button";
import DeleteEmButton from "@/components/dialogs/delete-em-button";
import EditAnnButton from "@/components/dialogs/edit-ann-button";
import EditEmButton from "@/components/dialogs/edit-em-button";
import { getEmergencies } from "@/server/emergencies"
import { OctagonAlert, Shield } from "lucide-react";

export default async function BackendPage() {
    
    const emergencies = await getEmergencies();

    return (
        <div className="space-y-8">
            <h1 className="text-4xl text-gray-600">Emergencies</h1>
            <AddEmButton />
            {emergencies.map(item => <div key={item.id} className="bg-white space-y-4 p-5 border border-red-500 rounded-md">
                <OctagonAlert className="text-red-500" size={30}/>
                <h1 className="text-gray-500 text-xl">{item.title}</h1>
                <p>
                    {item.description}
                </p>

                <p>
                    Priority: {item.priority}
                </p>
                <span className="text-gray-500 ">Posted on: {new Date(item.created_at).toLocaleDateString()}</span>

                <div className="flex">
                    <DeleteEmButton id={item.id}/>
                    <EditEmButton id={item.id} />
                </div>
            </div>)}
        </div>
    )
}