import React, {Component} from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import VerifiedTextbox from "../components/verifiedtextbox";
import FeedbackExplanation from "../components/feedbackexplanation";
import { withMixpanel } from 'gatsby-plugin-mixpanel';
import allWords from '../utils/words'
import feedbackGif from "../images/feedback.gif"
import essayGif from "../images/essay.gif"
import feedback2Gif from "../images/feedback2.gif"
import emailGif from "../images/email.gif"

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
            <div className="feedback--gif">
              <img className="feedback--main-gif" src={feedbackGif} alt="get feedback on your" ></img>
              <div className="feedback--rotating-gif">
                <img className="feedback--gif-1" src={emailGif} alt="email" ></img>
                <img className="feedback--gif-2" src={feedback2Gif} alt="feedback" ></img>
                <img className="feedback--gif-3" src={essayGif} alt="essay" ></img>
              </div>
            </div>
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
