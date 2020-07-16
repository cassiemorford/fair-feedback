import React, {Component} from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/footer";
import { withMixpanel } from 'gatsby-plugin-mixpanel';

class PronounPage extends Component {
  componentDidMount() {
    const { mixpanel } = this.props
    mixpanel.track('Page Load');
  }

  updateUsedWords = (usedWords) => {
    this.setState({usedWords})
  }

  render() {
    return (
      <Layout>
        <SEO title="Fair Feedback | Pronouns" />
        <div className="feedback">
          <div className="feedback--input">
            WIP
          </div>
        </div>
        <Footer/>
      </Layout>
    );
  }
}

export default withMixpanel()(PronounPage)
