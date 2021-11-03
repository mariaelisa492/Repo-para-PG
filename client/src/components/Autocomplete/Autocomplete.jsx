import React from "react";
import { useState } from "react";
import './autocomplete.css'

export const AutoComplete = ({ suggestions, input, setInput }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const onChange = (e) => {
        const userInput = e.target.value;
        const unLinked = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul class="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    if (index === activeSuggestionIndex) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} key={suggestion} onClick={onClick}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div class="no-suggestions">
                <span role="img" aria-label="tear emoji">
                    😪
                </span>{" "}
                <em>Sorry no suggestions</em>
            </div>
        );
    };

    return (
        <>
            <input
                type="text"
                className = "search-text"
                placeholder="Search musical instruments"
                onChange={onChange}
                value={input}
            />
            {showSuggestions && input && <SuggestionsListComponent />}
        </>
    );
};
