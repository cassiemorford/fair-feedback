import React, {Component} from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import { withMixpanel } from 'gatsby-plugin-mixpanel';
import {Editor, EditorState} from 'draft-js';
import pronounDecorator from '../utils/pronounDecorator';

const PRONOUNS = {
    'THEY': 'THEY',
    'HE': 'HE',
    'SHE': 'SHE',
    'OTHER': 'OTHER'
}

const EXPANDED_PRONOUNS = {
    'THEY': 'they / them / theirs',
    'HE': 'he / him / his',
    'SHE': 'she / her / hers',
    'OTHER': 'other'
}

class PronounPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPronoun: PRONOUNS.THEY,
            editorState: EditorState.createEmpty(pronounDecorator),
        };
    }
    
    componentDidMount() {
        const { mixpanel } = this.props
        mixpanel.track('Page Load');
    }


    onChange = (editorState) => {
        this.setState({editorState});
    }

    updateSelection = (ev) => {
        this.setState({
            selectedPronoun: ev.target.value,
        })
    }

  render() {
    const {selectedPronoun} = this.state

    return (
      <Layout>
        <SEO title="Fair Feedback | Pronouns" />
        <div className="feedback">
          <div className="feedback--input">
            What are your subject's pronouns?
            <form className="pronoun--form">
                <label>
                    <input type="radio" value={PRONOUNS.HE} checked={selectedPronoun === PRONOUNS.HE} onClick={this.updateSelection}/>
                    {EXPANDED_PRONOUNS.HE}
                </label>
                <label>
                    <input type="radio" value={PRONOUNS.SHE} checked={selectedPronoun === PRONOUNS.SHE} onClick={this.updateSelection}/>
                    {EXPANDED_PRONOUNS.SHE}
                </label>
                <label>
                    <input type="radio" value={PRONOUNS.THEY} checked={selectedPronoun === PRONOUNS.THEY} onClick={this.updateSelection}/>
                    {EXPANDED_PRONOUNS.THEY}
                </label>
                <label>
                    <input type="radio" value={PRONOUNS.OTHER} checked={selectedPronoun === PRONOUNS.OTHER} onClick={this.updateSelection}/>
                    {EXPANDED_PRONOUNS.OTHER}
                </label>
            </form>
            {!![PRONOUNS.HE, PRONOUNS.SHE, PRONOUNS.THEY].includes(selectedPronoun) && <div>
                {`ok, we'll make sure you only use `}
                <span className="pronoun">{`${EXPANDED_PRONOUNS[selectedPronoun]}`}</span>
            </div>}
            {![PRONOUNS.HE, PRONOUNS.SHE, PRONOUNS.THEY].includes(selectedPronoun) && <div>
                {`ok, we'll make sure you don't accidentally use `}
                <span className="pronoun">{`he, she, or they`}</span>
                {` pronouns`}
            </div>}
            <Editor 
                    editorState={this.state.editorState} 
                    onChange={this.onChange} 
                    decorators={pronounDecorator}
                    ref={this.editorRef}
                />
          </div>
        </div>
        <Footer/>
      </Layout>
    );
  }
}

export default withMixpanel()(PronounPage)
