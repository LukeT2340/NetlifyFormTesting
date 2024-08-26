const TestForm = () => {
    return (
        <form name="test-form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="test-form" />
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
