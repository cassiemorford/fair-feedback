import WarningSpan from "../components/warning_span";
import {CompositeDecorator} from 'draft-js';
import allWords from "../utils/words"

const words = allWords.map(w => w.word);
const re = new RegExp(words.join("|"), 'gi');


const WARNING_REGEX = re;

function warningStrategy(contentBlock, callback, contentState) {
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

const warningDecorator = new CompositeDecorator([
    {
      strategy: warningStrategy,
      component: WarningSpan,
    },
  ]);

export default warningDecorator;