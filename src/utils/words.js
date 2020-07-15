const GENDERED = {
    'GENDERED': `this word is used disproportionately to describe women`,
    'TONE' : `this is tone policing`,
    'UNTHREATENING': `this word is used to praise women for being non-threatening`,
    'INAPPROPRIATE': `it is inappropriate to use this word to describe a coworker`,
    'DISAGREEING': `it is often used for people who "disagree while female"`,
    'NONINCLUSIVE': `it erases people who don't identify as men`
}

const ABLEIST = {
    'ABLEIST': `it perpetuates ableist language`
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
    'BETTER_LANUAGE_EXISTS': `better language exists`
}


const REASONS = {
    GENDERED,
    ABLEIST,
    CALLOUS,
    RACIST,
    TRANSPHOBIC,
    MISC
}

const genderedWords = [
    {
        word: 'bossy',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: 'assertive',
        source: null
    },
    {
        word: 'abrasive',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: null,
        source: null
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
        suggestion: null,
        source: null
    },   
    {
        word: 'shrill',
        reason: REASONS.GENDERED.GENDERED,
        suggestion: null,
        source: null
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
        suggestion: null,
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
        suggestion: null,
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
        suggestion: null,
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
        source: null
    },    
    {
        word: 'hysterical',
        reason: REASONS.GENDERED.DISAGREEING,
        suggestion: null,
        source: null
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
        suggestion: null,
        source: null
    },
    {
        word: 'oversensitive',
        reason: REASONS.GENDERED.DISAGREEING,
        suggestion: null,
        source: null
    },
    {
        word: 'man hours',
        reason: REASONS.GENDERED.NONINCLUSIVE,
        suggestion: 'person hours',
        source: null
    },
    {
        word: 'guys',
        reason: REASONS.GENDERED.NONINCLUSIVE,
        suggestion: `folks, y'all, everyone`,
        source: null
    },
];
const ableistWords = [
    {
        word: 'crazy',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'insane',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
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
        suggestion: null,
        source: null
    },
    {
        word: 'dumb',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
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
        suggestion: null,
        source: null
    },
    {
        word: 'schizo',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'senile',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'sociopath',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'maniac',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
        source: null
    },
    {
        word: 'moron',
        reason: REASONS.ABLEIST.ABLEIST,
        suggestion: null,
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
        suggestion: null,
        source: null
    },
    {
        word: 'war story',
        reason: REASONS.CALLOUS.WAR,
        suggestion: null,
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
];
const racistWords = [
    {
        word: 'peanut gallery',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: null
    },
    {
        word: 'sold down the river',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: null
    },
    {
        word: 'redline',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: null
    },
    {
        word: 'eenie, meenie, miney, mo',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: null
    },
    {
        word: 'hip hip hooray',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'hooray',
        source: null
    },
    {
        word: 'uppity',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: null
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
        source: null
    },
    {
        word: 'blacklist',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: 'denylist',
        source: null
    },
    {
        word: 'ghetto',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: null
    },
    {
        word: 'brownbag',
        reason: REASONS.RACIST.RACIST_ORIGINS,
        suggestion: null,
        source: null
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
        source: `https://now.org/blog/the-g-word-isnt-for-you-how-gypsy-erases-romani-women/`
    },
    {
        word: 'diverse candidate',
        reason: REASONS.MISC.BETTER_LANGUAGE_EXISTS,
        suggestion: `candidate from an underrepresented population`,
        source: null,
    },
];

const allWords = [...genderedWords, ...ableistWords, ...callousWords, ...racistWords, ...transphobicWords, ...miscWords];

module.exports = allWords;