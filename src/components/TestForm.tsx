const TestForm = () => {
    return (
        <form name="test" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="test" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default TestForm
