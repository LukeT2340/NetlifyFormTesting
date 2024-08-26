const TestForm = () => {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Name: <input type="text" name="name" required /></label>
            </p>
            <p>
                <label>Email: <input type="email" name="email" required /></label>
            </p>
            <p>
                <label>Postcode: <input type="text" pattern="[0-9]{4}" name="postcode" required /></label>
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    )
}

export default TestForm
