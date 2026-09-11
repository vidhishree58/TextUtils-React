import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')

    // Convert to Uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }

    // Convert to Lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }

    // Trim Text
    const handleTrimClick = () => {
        let newText = text.trim()
        setText(newText)
        props.showAlert("Extra spaces removed!", "success")
    }

    // Remove Extra Spaces
    const handleExtraSpace = () => {
        let newText = text.replace(/[ ]+/g, " ")
        setText(newText)
        props.showAlert("Removed extra spaces!", "success")
    }

    // Capitalize Each Word
    const handleCapitalizeWords = () => {
        let newText = text
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase())

        setText(newText)
        props.showAlert("Each word capitalized!", "success")
    }

    // Sentence Case
    const handleSentenceCase = () => {
        let newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (char) => char.toUpperCase())

        setText(newText)
        props.showAlert("Converted to sentence case!", "success")
    }

    // Reverse Text
    const handleReverseText = () => {
        let newText = text.split("").reverse().join("")
        setText(newText)
        props.showAlert("Text reversed!", "success")
    }

    // Remove Numbers
    const handleRemoveNumbers = () => {
        let newText = text.replace(/[0-9]/g, "")
        setText(newText)
        props.showAlert("Numbers removed!", "success")
    }

    // Remove Special Characters
    const handleRemoveSpecialCharacters = () => {
        let newText = text.replace(/[^a-zA-Z0-9\s]/g, "")
        setText(newText)
        props.showAlert("Special characters removed!", "success")
    }

    // Remove Punctuation
    const handleRemovePunctuation = () => {
        let newText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, "")
        setText(newText)
        props.showAlert("Punctuation removed!", "success")
    }

    // Remove Empty Lines
    const handleRemoveExtraLines = () => {
        let newText = text
            .split("\n")
            .filter(line => line.trim() !== "")
            .join("\n")

        setText(newText)
        props.showAlert("Extra blank lines removed!", "success")
    }

    // Copy Text
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard!", "success")
    }

    // Clear Text
    const handleClear = () => {
        setText("")
        props.showAlert("Text cleared!", "success")
    }

    // Text Change
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // Word Count
    const wordCount = text
        .split(/\s+/)
        .filter((element) => element.length !== 0)
        .length

    // Sentence Count
    const sentenceCount = text
        .split(/[.!?]+/)
        .filter((element) => element.trim().length !== 0)
        .length

    // Line Count
    const lineCount = text.length === 0 ? 0 : text.split("\n").length

    // Reading Time
    const readingTime = (0.008 * wordCount).toFixed(2)

    return (
        <>
            <div
                className="container mt-1"
                style={{
                    color: props.mode === 'dark' ? 'white' : '#042743'
                }}
            >

                <h1 className="mb-4">{props.heading}</h1>

                <div className="mb-3">

                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor:
                                props.mode === 'dark' ? '#13466e' : 'white',
                            color:
                                props.mode === 'dark' ? 'white' : '#042743'
                        }}
                        id="myBox"
                        rows="10"
                        placeholder="Enter your text here..."
                    >
                    </textarea>

                    <div className="gap my-3">

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleLoClick}
                        >
                            Convert to Lower Case
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleUpClick}
                        >
                            Convert to Upper Case
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleTrimClick}
                        >
                            Trim
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleExtraSpace}
                        >
                            Remove Extra Space
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleCapitalizeWords}
                        >
                            Capitalize Words
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleSentenceCase}
                        >
                            Sentence Case
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleReverseText}
                        >
                            Reverse Text
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleRemoveNumbers}
                        >
                            Remove Numbers
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleRemoveSpecialCharacters}
                        >
                            Remove Special Characters
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleRemovePunctuation}
                        >
                            Remove Punctuation
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleRemoveExtraLines}
                        >
                            Remove Extra Lines
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-primary mx-2 my-2"
                            onClick={handleCopy}
                        >
                            Copy Text
                        </button>

                        <button
                            disabled={text.length === 0}
                            className="btn btn-danger mx-2 my-2"
                            onClick={handleClear}
                        >
                            Clear Text
                        </button>

                    </div>
                </div>
            </div>

            <div
                className="container my-3"
                style={{
                    color: props.mode === 'dark' ? 'white' : '#042743'
                }}
            >

                <h2>Your Text Summary</h2>

                <p>
                    {wordCount} words and {text.length} characters
                </p>

                <p>
                    {sentenceCount} sentences and {lineCount} lines
                </p>

                <p>
                    {readingTime} Minutes read
                </p>

                <h2>Preview</h2>

                <p>
                    {text.length > 0 ? text : "Nothing to preview"}
                </p>

            </div>
        </>
    )
}