import { useState } from "react";
import toast from "react-hot-toast";
import { noteInput } from "~/types";
import { api } from "~/utils/api";

export default function CreateNote() {
    const [newNote, setNewNote] = useState('');

    const trpc = api.useUtils()

    const { mutate } = api.todo.create.useMutation({
        onSettled: async () => {
            await trpc.todo.all.invalidate()
            setNewNote('')
        },
        

    });

    

    return (
        <div>
            <form
                className="flex gap-2"
                onSubmit={(e) => {
                    e.preventDefault()

                    const result = noteInput.safeParse(newNote)

                    if (!result.success) {
                        toast.error(result.error.format()._errors.join('\n'))
                        return
                    }

                    mutate(newNote)
                }}
            >
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="New Note ..."
                    type="text" name="new-todo" id="new-todo"
                    value={newNote}
                    onChange={(e) => {
                        setNewNote(e.target.value)
                    }}
                />

                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Create
                </button>
            </form>
        </div>
    )
}