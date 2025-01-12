import styles from "../styles/styles.css";
import NewNote from "~/components/NewNote";
import {redirect} from "@remix-run/node";
import NoteList from "~/components/NoteList";
import {dummyNotes} from "../../data/data";
import {useLoaderData, useActionData} from "@remix-run/react";

type Note = {
    title: string
    content: string
}
type Response = {
    message: string
}
//compoent triggered by get request
export default function NotesPage() {
    //gets data from loader / action  => accessible anywhere
    const loaderData: Note[] = useLoaderData();
    const actionData: Response = useActionData();

    return (
        <main className="max-w-2xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">NotesPage</h1>
            <NewNote/>
            {
                actionData.message && (
                    <div className="text-green-800 text-center font-bold">{actionData.message}</div>
                )
            }

            <NoteList notes={loaderData}/>
        </main>
    );
}

// BUILT IN METHOD FOR STYLES ---------------------------
export function links() {
    return [
        {rel: "stylesheet", href: styles},
    ];
}

// BUILT IN METHODS FOR HTTP ---------------------------
//trigger get request , rendered on server
export async function loader() {
    //logic to get data ...
    const data: Note[] = dummyNotes;

    if (data.length === 0) {
        throw new Response({message: "empty data"}, {
                status: 404
            }  //uses Catch Boundary COmpoentn
        )
    }

// to get data useLoader hook
    return data;
}
export function CatchBoundary(){
        // const response = useCatch() //DEPRECATED>>
}

//function to handle ssr request in routes -waits for POST request
export async function action(data: { request: Request }): Promise<Response> {
    const {request} = data;
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData) //posibble way
    // const note = {
    //     title: formData.get("title") || "",
    //     content: formData.get("content") || "",
    // }

    if (true) {
        //return test actionData

        const error: Response = {
            message: "Hello"
        }
        return error;
    }

    // Use formData as needed
    console.log(noteData);
    console.log(formData);
    return redirect('/notes')
}