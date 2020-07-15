import React, {Component} from "react"
import { withMixpanel } from 'gatsby-plugin-mixpanel';
import WordFixSuggestion from "../components/word_fix_suggestion";


class FeedbackExplanation extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {usedWords} = this.props;

        return (  
            <div className='feedback--explanation'>
                {usedWords.map(w => <WordFixSuggestion word={w}/>)}
            </div>
        )
    }
}

export default withMixpanel()(FeedbackExplanation);