function fixText(text) {
    // Check if the text is not empty and the first character is a letter (a-z or A-Z)
    if (text && text[0].match(/[a-zA-Z]/)) {
        // Capitalize the first letter of the text
        text = text[0].toLowerCase() + text.slice(1);
    }

    // Remove leading and trailing whitespaces
    text = text.trim();

    // Return the modified text
    return text;
}

