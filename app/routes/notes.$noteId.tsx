//dynamic route notes/{id}
import {Link, useLoaderData} from "@remix-run/react";
import {dummyNotes} from "../../data/data";

type Note = {

    id: number
    title: string
    content: string

}
type NoteDetailProps = {
    title: string;
    content: string;
};

export default function NoteDetail() {
    const data: Note = useLoaderData()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {data.title}
                </h1>
                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                    {data.content}
                </p>
                <div className="mt-6 flex justify-end">
                    <Link to={'/notes'}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
}

export async function loader({params}) {
    //logic to get data ...
    const data: Note[] = dummyNotes;
    const nodeId = params.noteId //param in file name

    const selectedNote: Note | undefined = data.find(note => note.id == nodeId)
    if (!selectedNote) {
        throw new Response("Note not found");  
    }
    return selectedNote;
}