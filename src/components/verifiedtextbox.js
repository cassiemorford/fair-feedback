import React, {Component} from "react"
import { withMixpanel } from 'gatsby-plugin-mixpanel';


class VerifiedTextbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            formattedContent: '',
        };
    }

    handleChange = (ev) => {
        let content, formattedContent = ev.target.value;
        let {words} = this.props;
        let usedWords = [];

        if (!words) return 

        words.forEach(wordObject => {
            const word = wordObject.word;
            const wordRegex = new RegExp(word);
            if (formattedContent.indexOf(word) >= 0) {
                usedWords.push(wordObject);
            }
            formattedContent = formattedContent.replace(wordRegex, `<span class="word-warning">${word}</span>`)
        });

        this.props.setUsedWords(usedWords);
        this.setState({content, formattedContent});
        
    }

    render() {
        return (  
            <div>
                <textarea rows="10" columns="30" placeholder={"put feedback here"} className='feedback--textbox' value={this.state.content} onChange={this.handleChange}/>
                <div className="feedback--output" dangerouslySetInnerHTML={{ __html: this.state.formattedContent }}/>     
            </div>
        )
    }
}

export default withMixpanel()(VerifiedTextbox);