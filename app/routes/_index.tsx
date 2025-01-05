import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {title: "Remix tutorial App"},
        {name: "description", content: "take notes!"},
    ];
};

export default function Index() {
    return (
        <main id={'content-container'}>
            <h1>Notebook</h1>
            <p>For taking notes</p>
            <p id={'cta'}>
                <Link to={'/notes'}>go to notes</Link>
            </p>
        </main>
    );
}

