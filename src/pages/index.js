import React, {Component} from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import VerifiedTextbox from "../components/verifiedtextbox";
import FeedbackExplanation from "../components/feedbackexplanation";
import { withMixpanel } from 'gatsby-plugin-mixpanel';
import allWords from '../utils/words'
import feedbackGif from "../images/feedback.gif"

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        usedWords: [],
    };
  }

  componentDidMount() {
    const { mixpanel } = this.props
    mixpanel.track('Page Load');
  }

  updateUsedWords = (usedWords) => {
    this.setState({usedWords})
  }

  render() {
    const {usedWords} = this.state;

    return (
      <Layout>
        <SEO title="Fair Feedback" />
        <div className="feedback">
          <div className="feedback--input">
            <img className="feedback--gif" src={feedbackGif} alt="get feedback on your feedback" ></img>
            <VerifiedTextbox words={allWords} setUsedWords={this.updateUsedWords}/>
          </div>
          <FeedbackExplanation usedWords={usedWords}/>
        </div>
        <Footer/>
      </Layout>
    );
  }
}

export default withMixpanel()(IndexPage)
