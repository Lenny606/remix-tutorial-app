import styles from "../styles/styles.css";
import NewNote from "~/components/NewNote";

export default function NotesPage() {
    return (
        <main className="max-w-2xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">NotesPage</h1>
            <NewNote />
        </main>
    );
}

export function links() {
    return [
        {rel: "stylesheet", href: styles},
    ];
}
