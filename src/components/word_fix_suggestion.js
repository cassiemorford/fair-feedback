import React, {Component} from "react"
import { withMixpanel } from 'gatsby-plugin-mixpanel';


class WordFixSuggestion extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {word} = this.props;
        const {reason, suggestion, source} = word;
        return (  
            <div className="word-section">
                <span className="word-warning">{word.word}</span>
                {reason && <div>{`${reason}.`}</div>}
                {suggestion && <div>
                    <span>{`Try `}</span>
                    <span className="word--suggestion">{`${suggestion}`}</span>
                    <span> {` instead`} </span>
                </div>}
                {source && <div className="word--learn"><a rel="noopener noreferrer" target="_blank" href={source}>learn more</a></div>}

            </div>
        )
    }
}

export default withMixpanel()(WordFixSuggestion);