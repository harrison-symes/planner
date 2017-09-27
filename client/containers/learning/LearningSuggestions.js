import {connect} from 'react-redux'

import LearningSuggestions from '../../components/learning/LearningSuggestions'
import {selectLearningSuggestionAction} from '../../actions/learningPlan'

const mapStateToProps = ({learningSuggestions}) => {
  return {
    suggestions: learningSuggestions,
    isSelected: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectSuggestion: (suggestion) => dispatch(selectLearningSuggestionAction(suggestion))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningSuggestions)
