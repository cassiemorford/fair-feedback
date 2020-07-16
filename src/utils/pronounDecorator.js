import WarningSpan from "../components/warning_span";
import {CompositeDecorator} from 'draft-js';


const pronounRegExs = [' he ', ' him ', ' his ', ' she ', ' her ', ' hers '];
const re = new RegExp(pronounRegExs.join("|"), 'gi');

const WARNING_REGEX = re;

function pronounWarningStrategy(contentBlock, callback, contentState) {
  findWithRegex(WARNING_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
}

const pronounDecorator = new CompositeDecorator([
    {
      strategy: pronounWarningStrategy,
      component: WarningSpan,
    },
  ]);

export default pronounDecorator;