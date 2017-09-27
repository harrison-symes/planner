import {connect} from 'react-redux'

import LearningSuggestions from '../../components/learning/LearningSuggestions'
import {cancelLearningSuggestionAction} from '../../actions/learningPlan'

const mapStateToProps = ({selectedLearningSuggestions}) => {
  return {
    suggestions: selectedLearningSuggestions,
    isSelected: true
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSuggestion: (suggestion) => dispatch(cancelLearningSuggestionAction(suggestion))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningSuggestions)
