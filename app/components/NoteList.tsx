import {Link} from "@remix-run/react";

type Note = {

    id: number
    title: string
    content: string

}
type NotesProps = Note[]

export default function NoteList({notes}: { notes: NotesProps }) {
    return (
        <div className="notes-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {notes && notes.length > 0 ? (
                notes.map((note, index) => (

                    <Link  key={index} to={note.id.toString()}>
                        <div
                            className="note-card bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {note.title}
                            </h3>
                            <p className="text-gray-600">{note.content}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="col-span-full text-center text-gray-500">
                    No notes available
                </p>
            )}
        </div>
    );
}

