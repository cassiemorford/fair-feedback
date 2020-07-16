const GENDERED = {
    'GENDERED': `this word is used disproportionately to describe women`,
    'TONE' : `this is tone policing`,
    'UNTHREATENING': `this word is used to praise women for being non-threatening`,
    'INAPPROPRIATE': `it is inappropriate to use this word to describe a coworker`,
    'DISAGREEING': `this word is often used for people who "disagree while female"`,
    'NONINCLUSIVE': `this word erases people who don't identify as men`
}

const ABLEIST = {
    'ABLEIST': `this word perpetuates ableist language`
}
const CALLOUS = {
    'WAR': `it may be seen as making light of war`,
    'DEATH': `it makes light of death`
}
const RACIST = {
    'RACIST_ORIGINS': `this word has racist origins`,
    'RACIST': `this is a racist term`
}
const TRANSPHOBIC = {
    'INCLUSIVITY': `this phrase isn't inclusive of everyone`,
    'IMPLIED_PREFERENCE': `this implies that someone's gender identity is merely a preference`
}
const MISC = {
    'SLUR': `this is a slur`,
    'DERIVED_FROM_SLUR': `this is derived from a slur`,
    'BETTER_LANUAGE_EXISTS': `better language exists`,
    'CULTURAL_APPROPRIATION': `This term is cultural appropriation, and shouldn't be used by individuals from outside of its original culture`
}

const REASONS = {
    GENDERED,
    ABLEIST,
    CALLOUS,
    RACIST,
    TRANSPHOBIC,
    MISC
};
const genderedWords = [
    {
        word: 'bossy',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: 'decisive',
        source: 'https://blog.ecornell.com/women-are-bossy-and-men-are-decisive/'
    },
    {
        word: 'abrasive',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: null,
        source: 'https://www.fastcompany.com/3034895/the-one-word-men-never-see-in-their-performance-reviews'
    },
    {
        word: 'cute',
        reason: REASONS.GENDERED.INAPPROPRIATE,
        suggestion: null,
        source: null
    },       
    {
        word: 'aggressive',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: 'confident, intelligent, decisive, authoritative, assertive',
        source: 'https://blog.ecornell.com/women-are-bossy-and-men-are-decisive/'
    },   
    {
        word: 'shrill',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: null,
        source: 'https://time.com/4268325/history-calling-women-shrill/'
    },
    {
        word: 'dramatic',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: null,
        source: null
    },
    {
        word: 'bitchy',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: 'rude',
        source: null
    },    
    {
        word: 'bitch',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: null,
        source: null
    },
    {
        word: 'ditzy',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: 'spacey',
        source: null
    },
    {
        word: 'nag',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: null,
        source: null
    },
    {
        word: 'ladylike',
        reason: REASONS.GENDERED.UNTHREATENING,
        suggestion: null,
        source: null
    },
    {
        word: 'bubbly',
        reason: REASONS.GENDERED.UNTHREATENING,
        suggestion: 'cheerful',
        source: null
    },
    {
        word: 'sassy',
        reason: REASONS.GENDERED.UNTHREATENING,
        suggestion: null,
        source: null
    },
    {
        word: 'chatty',
        reason: REASONS.GENDERED.UNTHREATENING,
        suggestion: null,
        source: null
    },
    {
        word: 'emotional',
        reason: REASONS.GENDERED.DISAGREEING,
        suggestion: null,
        source: 'https://blog.ecornell.com/women-are-bossy-and-men-are-decisive/'
    },    
    {
        word: 'hysterical',
        reason: REASONS.GENDERED.DISAGREEING,
        suggestion: 'passionate',
        source: `https://www.mcgill.ca/oss/article/history-quackery/history-hysteria#:~:text=Throughout%20history%20hysteria%20has%20been,rest%20of%20the%20body's%20health.`
    },    
    {
        word: 'flaky',
        reason: REASONS.GENDERED.DISAGREEING,
        suggestion: null,
        source: null
    },
    {
        word: 'moody',
        reason: REASONS.GENDERED.DISAGREEING,
        suggestion: 'unpredictable',
        source: null
    },
    {
        word: 'oversensitive',
        reason: REASONS.GENDERED.DISAGREEING,
        suggestion: 'sensitive',
        source: null
    },
    {
        word: 'man hours',
        reason: REASONS.GENDERED.NONINCLUSIVE,
        suggestion: 'person hours, developer days',
        source: null
    },
    {
        word: 'guys',
        reason: REASONS.GENDERED.NONINCLUSIVE,
        suggestion: `folks, y'all, everyone`,
        source: 'https://time.com/5688255/you-guys/'
    },
];
const ableistWords = [
    {
        word: 'crazy',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'illogical',
        source: 'https://www.npr.org/2019/07/08/739643765/why-people-are-arguing-to-stop-using-the-words-crazy-and-insane'
    },
    {
        word: 'insane',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'illogical',
        source: 'https://www.npr.org/2019/07/08/739643765/why-people-are-arguing-to-stop-using-the-words-crazy-and-insane'
    },
    {
        word: 'lame',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'stupid',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'irrational',
        source: null
    },
    {
        word: 'dumb',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'avoiding this word',
        source: null
    },
    {
        word: 'lunatic',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'looney',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'psycho',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'unpredictable',
        source: null
    },
    {
        word: 'schizo',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'unpredictable',
        source: null
    },
    {
        word: 'senile',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'avoiding this word',
        source: null
    },
    {
        word: 'sociopath',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'heartless',
        source: null
    },
    {
        word: 'maniac',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'unpredicatable',
        source: null
    },
    {
        word: 'moron',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'avoiding this word',
        source: null
    },
    {
        word: 'nuts',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'sanity check',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: 'asking for validation',
        source: null
    },

];
const callousWords = [
    {
        word: 'war room',
        reason: REASONS.CALLOUS.WAR,
        suggestion: 'ship room',
        source: null
    },
    {
        word: 'war story',
        reason: REASONS.CALLOUS.WAR,
        suggestion: 'avoiding this word',
        source: null
    },
    {
        word: 'killswitch',
        reason: REASONS.CALLOUS.DEATH,
        suggestion: 'switch, emergency switch',
        source: null
    },
    {
        word: 'kill switch',
        reason: REASONS.CALLOUS.DEATH,
        suggestion: 'switch, emergency switch',
        source: null
    },
    {
        word: 'postmortem',
        reason: REASONS.CALLOUS.DEATH,
        suggestion: 'retrospective',
        source: null
    },
    {
        word: 'premortem',
        reason: REASONS.CALLOUS.DEATH,
        suggestion: 'pre-release risk assesment',
        source: null
    },
    {
        word: 'post-mortem',
        reason: REASONS.CALLOUS.DEATH,
        suggestion: 'retrospective',
        source: null
    },
    {
        word: 'pre-mortem',
        reason: REASONS.CALLOUS.DEATH,
        suggestion: 'pre-release risk assesment',
        source: null
    },
];
const racistWords = [
    {
        word: 'peanut gallery',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'hecklers',
        source: 'https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#3peanut-gallery-3'
    },
    {
        word: 'sold down the river',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: 'https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#9-sold-down-the-river-9'
    },
    {
        word: 'redlining',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: 'https://www.nytimes.com/2017/08/24/upshot/how-redlinings-racist-effects-lasted-for-decades.html'
    },
    {
        word: 'redline',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: 'https://www.nytimes.com/2017/08/24/upshot/how-redlinings-racist-effects-lasted-for-decades.html'
    },
    {
        word: 'grandfathered',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'legacied',
        source: null
    },
    {
        word: 'eenie, meenie, miney, mo',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: 'https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#10-eenie-meenie-miney-moe-10'
    },
    {
        word: 'hip hip hooray',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'hooray',
        source: 'https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#11-hip-hip-hooray-11'
    },
    {
        word: 'uppity',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: 'https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#2-uppity-2'
    },
    {
        word: 'master',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'primary or main',
        source: null
    },
    {
        word: 'slave',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'replica',
        source: null
    },
    {
        word: 'whitelist',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'allowlist',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/'
    },
    {
        word: 'blacklist',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'denylist',
        source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/'
    },
    {
        word: 'ghetto',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: 'https://time.com/5684505/ghetto-word-history/'
    },
    {
        word: 'brownbag',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: 'https://en.wikipedia.org/wiki/Brown_Paper_Bag_Test'
    },


];
const transphobicWords = [
    {
        word: 'he or she',
        reason: REASONS.TRANSPHOBIC.INCLUSIVITY,
        suggestion: 'they',
        source: null
    },
    {
        word: 'he/she',
        reason: REASONS.TRANSPHOBIC.INCLUSIVITY,
        suggestion: 'they',
        source: null
    },
    {
        word: 'him/her',
        reason: REASONS.TRANSPHOBIC.INCLUSIVITY,
        suggestion: 'them',
        source: null
    },
    {
        word: 'him or her',
        reason: REASONS.TRANSPHOBIC.INCLUSIVITY,
        suggestion: 'them',
        source: null
    },
    {
        word: 'preferred pronouns',
        reason: REASONS.TRANSPHOBIC.IMPLIED_PREFERENCE,
        suggestion: 'pronouns',
        source: null
    },
    {
        word: 'self-identifies',
        reason: REASONS.TRANSPHOBIC.IMPLIED_PREFERENCE,
        suggestion: 'is',
        source: null
    },
];
const miscWords = [
    {
        word: 'gypsy',
        reason: REASONS.MISC.SLUR,
        suggestion: null,
        source: `https://now.org/blog/the-g-word-isnt-for-you-how-gypsy-erases-romani-women/`
    },
    {
        word: 'gyp ',
        reason: REASONS.MISC.DERIVED_FROM_SLUR,
        suggestion: null,
        source: `https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#4-gyp-4`
    },
    {
        word: 'diverse candidate',
        reason: REASONS.MISC.BETTER_LANGUAGE_EXISTS,
        suggestion: `candidate from an underrepresented population`,
        source: null,
    },
    {
        word: 'diversity candidate',
        reason: REASONS.MISC.BETTER_LANGUAGE_EXISTS,
        suggestion: `candidate from an underrepresented population`,
        source: null,
    },
    {
        word: 'eskimo',
        reason: REASONS.MISC.BETTER_LANGUAGE_EXISTS,
        suggestion: `Inuit`,
        source: 'https://www.businessinsider.com/offensive-phrases-that-people-still-use-2013-11#8-eskimo-8',
    },
    {
        word: 'spirit animal',
        reason: REASONS.MISC.CULTURAL_APPROPRIATION,
        suggestion: `Patronus, familiar`,
        source: 'https://www.babbel.com/en/magazine/common-racist-words-phrases',
    },
];

const allWords = [...genderedWords, ...ableistWords, ...callousWords, ...racistWords, ...transphobicWords, ...miscWords];

module.exports = allWords;