import React, {FormEvent, useState} from "react";
import SiteLayout from "../../components/SiteLayout";

const Contact = (): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSetName = (e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value);
    const handleSetEmail = (e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
    const handleSetMessage = (e: FormEvent<HTMLInputElement>) => setMessage(e.currentTarget.value);

    const submit = () => {
        const url: string = "https://getform.io/f/afbddb2e-ea78-48ce-b785-7fd6f834f64d";
        fetch(url, {
            body: JSON.stringify({
                email,
                message,
                name,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then(() => alert("success!")).catch(() => alert("fail!"));
    };

    return (
        <SiteLayout
            title={"Judson James | Contact"}
            description={"Contact Judson for more information."}
            imageRef={"/img/profile_pic.jpg"}
        >
            <div>
                Contact Page
                <form>
                    <input type={"text"} name={"name"} onInput={handleSetName}/>
                    <input type={"email"} name={"email"} onInput={handleSetEmail}/>
                    <input type={"text"} name={"message"} onInput={handleSetMessage}/>
                    <button onClick={submit}>Send</button>
                </form>
            </div>
        </SiteLayout>
    );
};

export default Contact;
