export default {
    options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "“”‘’",
        highlight: null,
        maxNesting: 20
    },
    components: {
        core: {
            rules: [
                "normalize",
                "block",
                "inline"
            ]
        },
        block: {
            rules: [
                "paragraph"
            ]
        },
        inline: {
            rules: [
                "text"
            ],
            rules2: [
                "balance_pairs",
                "text_collapse"
            ]
        }
    }
};
