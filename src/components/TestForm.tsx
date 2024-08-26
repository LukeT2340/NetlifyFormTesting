const TestForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Cast event.currentTarget to HTMLFormElement
        const myForm = event.currentTarget as HTMLFormElement;
        const formData = new FormData(myForm);

        // Convert FormData to URLSearchParams
        const urlSearchParams = new URLSearchParams();
        formData.forEach((value, key) => {
            urlSearchParams.append(key, value as string); // Ensure value is a string
        });

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: urlSearchParams.toString(),
        })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => console.error("Error submitting form:", error));
    };

    return (
        <form name="contact" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Postcode: <input type="text" name="postcode" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default TestForm
