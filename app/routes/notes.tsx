import styles from "../styles/styles.css";
import NewNote from "~/components/NewNote";
import {redirect} from "@remix-run/node";

//compoent triggered by get request
export default function NotesPage() {
    return (
        <main className="max-w-2xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">NotesPage</h1>
            <NewNote/>
        </main>
    );
}

export function links() {
    return [
        {rel: "stylesheet", href: styles},
    ];
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