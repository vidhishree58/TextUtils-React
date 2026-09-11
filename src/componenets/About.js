import React from 'react'

export default function About(props) {

    const isDark = props.mode === 'dark'

    const headingStyle = {
        color: isDark ? 'white' : '#042743'
    }

    const cardStyle = {
        backgroundColor: isDark ? '#13466e' : '#f8f9fa',
        color: isDark ? 'white' : '#042743',
        border: isDark ? '1px solid #5c8db8' : '1px solid #dee2e6',
        borderRadius: '12px'
    }

    return (
        <div
            className="container py-4"
            style={{ color: isDark ? 'white' : '#042743' }}
        >

            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold" style={headingStyle}>
                    About TextUtils
                </h1>

                <p className="lead mt-3">
                    A simple and powerful text utility tool designed to
                    help you transform, clean and analyze your text with ease.
                </p>
            </div>


            {/* Introduction */}
            <div className="mb-5">
                <h2 className="fw-bold mb-3" style={headingStyle}>
                    What is TextUtils?
                </h2>

                <p>
                    TextUtils is a React-based text utility application that
                    provides a collection of useful tools for editing and
                    analyzing text. Whether you want to change the case,
                    remove unnecessary characters, clean your text or check
                    text statistics, TextUtils makes the process quick and easy.
                </p>

                <p>
                    The application has been designed with a clean and
                    responsive interface so that it can be used comfortably
                    on different screen sizes.
                </p>
            </div>


            {/* Features */}
            <div className="mb-5">
                <h2 className="fw-bold mb-4" style={headingStyle}>
                    Features
                </h2>

                <div className="row g-4">

                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 h-100" style={cardStyle}>
                            <h5 className="fw-bold">
                                Text Transformation
                            </h5>

                            <p className="mb-0">
                                Convert your text to uppercase, lowercase,
                                sentence case or capitalize each word.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 h-100" style={cardStyle}>
                            <h5 className="fw-bold">
                                Text Cleaning
                            </h5>

                            <p className="mb-0">
                                Remove extra spaces, numbers, punctuation,
                                special characters and unnecessary blank lines.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 h-100" style={cardStyle}>
                            <h5 className="fw-bold">
                                Text Analysis
                            </h5>

                            <p className="mb-0">
                                Get useful statistics including word count,
                                character count, sentence count and line count.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 h-100" style={cardStyle}>
                            <h5 className="fw-bold">
                                Reading Time
                            </h5>

                            <p className="mb-0">
                                Get an estimated reading time based on the
                                number of words in your text.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 h-100" style={cardStyle}>
                            <h5 className="fw-bold">
                                Copy & Clear
                            </h5>

                            <p className="mb-0">
                                Quickly copy your processed text or clear the
                                entire text area with a single click.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 h-100" style={cardStyle}>
                            <h5 className="fw-bold">
                                Dark Mode
                            </h5>

                            <p className="mb-0">
                                Switch between light and dark themes for a
                                comfortable viewing experience.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            {/* Technology */}
            <div className="mb-5">
                <h2 className="fw-bold mb-3" style={headingStyle}>
                    Technologies Used
                </h2>

                <div
                    className="p-4"
                    style={cardStyle}
                >
                    <p className="mb-2">
                        <strong>React.js:</strong> Used to build the
                        interactive user interface and manage application state.
                    </p>

                    <p className="mb-2">
                        <strong>Bootstrap:</strong> Used for responsive
                        layouts, styling and UI components.
                    </p>

                    <p className="mb-0">
                        <strong>JavaScript:</strong> Used to implement the
                        text processing and application functionality.
                    </p>
                </div>
            </div>


            {/* Why TextUtils */}
            <div className="mb-5">
                <h2 className="fw-bold mb-3" style={headingStyle}>
                    Why Use TextUtils?
                </h2>

                <p>
                    TextUtils brings commonly used text editing and analysis
                    features together in one convenient place. It is simple,
                    fast and easy to use, making it useful for students,
                    writers, developers and anyone who works with text.
                </p>
            </div>


            {/* Footer Message */}
            <div
                className="text-center p-4 mb-3"
                style={cardStyle}
            >
                <h4 className="fw-bold">
                    Simple. Useful. Efficient.
                </h4>

                <p className="mb-0">
                    Transform and analyze your text with TextUtils.
                </p>
            </div>

        </div>
    )
}