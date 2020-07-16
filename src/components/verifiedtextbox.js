import React, {Component} from "react"
import { withMixpanel } from 'gatsby-plugin-mixpanel';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import warningDecorator from '../utils/decorators'

class VerifiedTextbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(warningDecorator)
        };
        this.editorRef = React.createRef();
    }

    onChange = (editorState) => {
            let formattedContent = editorState.getCurrentContent().getPlainText('\u0001').toLowerCase();
            let {words} = this.props;
            let usedWordsInOrder = [];
            if (!words) return 

            words.forEach(wordObject => {
                const word = wordObject.word;
                const wordRegex = new RegExp(word);
                const firstIndex = formattedContent.indexOf(word);
                if (firstIndex >= 0) {
                    usedWordsInOrder.push([wordObject, firstIndex]);
                }
                formattedContent = formattedContent.replace(wordRegex, `<span class="word-warning">${word}</span>`)
            });

            const usedWords = usedWordsInOrder
                .sort((a,b) => a[1] - b[1])
                .map(uwwo => uwwo[0]);

            this.props.setUsedWords(usedWords);
            this.setState({editorState});
    }

    render() {
        return (  
            <div>
                <div className="feedback--intro"> type below -- your text is never tracked, stored, or analyzed </div>
                <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange} 
                    decorators={warningDecorator}
                    ref={this.editorRef}
                />
            </div>
        )
    }
}

export default withMixpanel()(VerifiedTextbox);