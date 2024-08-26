const TestForm = () => {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Name: <input type="text" name="name" required /></label>
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    )
}

export default TestForm
