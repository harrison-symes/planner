import React from 'react'

export default function ({suggestions, isSelected, selectSuggestion, show, toggle}) {
  const buttonDisplay = isSelected ? "Selected" : "Suggestions"
  return (
    <span className="column">
      {suggestions.length != 0
        ? <span>
          <button onClick={toggle} className={`button ${show ? "is-danger" : "is-info is-large"} is-inverted`}>{show ? `Hide ${buttonDisplay}`: `See ${buttonDisplay}`}</button>
          <div className="section columns is-multiline is-mobile">
            {show && suggestions.map((suggestion, i) => <p key={i} onClick={() => selectSuggestion(suggestion)} className={`button column ${isSelected ? "is-info is-inverted" : 'is-success '} `}>{suggestion.title}</p>)}
          </div>
        </span>
        : <div></div>
      }
    </span>
  )
}
