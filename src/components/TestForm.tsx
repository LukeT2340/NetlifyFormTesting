const TestForm = () => {
    return (
        <form method="POST" name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default TestForm
