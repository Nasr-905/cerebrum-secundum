import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/contact.inline"
import style from "./styles/contact.scss"

export interface Options {
    /** The URL of your Cloudflare Worker that handles sending emails */
    workerUrl?: string;
}

export default ((userOpts?: Options) => {
    if (!userOpts?.workerUrl) {
        throw new Error("You must provide a worker URL to use the contact form");
    }
    function ContactForm(props: QuartzComponentProps) {
        return (
        <form id="contact-form" data-worker-url={userOpts?.workerUrl}>
            <label>
            Name
            <input type="text" name="name" required />
            </label>
            <br />
            <label>
            Email
            <input type="email" name="email" />
            </label>
            <br />
            <label>
            Subject
            <input type="text" name="subject" required />
            </label>
            <br />
            <label>
            Message
            <textarea name="body" required></textarea>
            </label>
            <br />
            <button type="submit">Send</button>
        </form>
        );
    }
    ContactForm.css = style
    ContactForm.afterDOMLoaded = script

  return ContactForm;
}) satisfies QuartzComponentConstructor;

