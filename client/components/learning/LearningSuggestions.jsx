import React from 'react'

export default function ({suggestions, isSelected, selectSuggestion}) {
  return (
    <div className="section columns is-multiline is-mobile">
      {suggestions.length != 0
        ? suggestions.map((suggestion, i) => <p key={i} onClick={() => selectSuggestion(suggestion)} className={`button column ${isSelected ? "is-info is-inverted" : 'is-success '} `}>{suggestion.title}</p>)
        : <div></div>
      }
    </div>
  )
}
