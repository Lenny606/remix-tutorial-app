import styles from "../styles/styles.css";
import NewNote from "~/components/NewNote";
import {redirect} from "@remix-run/node";
import NoteList from "~/components/NoteList";
import {dummyNotes} from "../../data/data";
import {useLoaderData} from "@remix-run/react";
type Note = {

    title: string
    content: string

}
//compoent triggered by get request
export default function NotesPage() {
    //gets data from loader action
    const data: Note[] = useLoaderData();
    return (
        <main className="max-w-2xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">NotesPage</h1>
            <NewNote/>
            <NoteList notes={data}/>
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

    // to get data useLoader hook
    return data;
}

//function to handle ssr request in routes -waits for POST request
export async function action(data: { request: Request }): Promise<Response> {
    const { request } = data;
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData) //posibble way
    // const note = {
    //     title: formData.get("title") || "",
    //     content: formData.get("content") || "",
    // }

    // Use formData as needed
    console.log(noteData);
    console.log(formData);
    return redirect('/notes')
}