import {Form} from "@remix-run/react";

export default function NewNote() {
    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Create a New Note</h2>
            <Form className="space-y-4" method={'post'} id={'note-form'} >
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Write your note here..."
                    rows={5}
                    name={'content'}
                ></textarea>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
                >
                    Save Note
                </button>
            </Form>
        </div>
    );
}
