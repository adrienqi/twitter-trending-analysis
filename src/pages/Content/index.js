const { Configuration, OpenAIApi } = require('openai')

let openaiClient;

chrome.storage.local.get(['openaiApiKey']).then(({ openaiApiKey }) => {
    const configuration = new Configuration({
        apiKey: openaiApiKey,
    })
    openaiClient = new OpenAIApi(configuration)
})

// chrome local storage api allows listening to storage events
// add listerer

chrome.storage.onChanged.addListener((changes) => {
    for (let [key, { newValue }] of Object.entries(changes)) {
        if (key != 'openaiApiKey') continue;
        openaiClient = new OpenAIApi(
            new Configuration({
                apiKey: newValue,
            })
        )
    }
})


//TODO: selector id changes with light mode/dim mode/dark mode
setInterval(() => {
    const trendingList = document.querySelectorAll(".css-901oao.r-1nao33i.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-1bymd8e.r-bcqeeo.r-qvutc0");
    console.log(trendingList)

    for (const topic of trendingList) {
        if (topic.parentNode && topic.parentNode.querySelector('#generate-summary-button') == null) {
            appendSummaryButton(topic);
        }
    }
}, 1000);

// TODO:
// button to prompt gpt under each topic
function appendSummaryButton(topic) {
    topic.insertAdjacentHTML(
        'afterend',
        `<div id = "generate-summary-button" class="gen-btn">
            <svg class="gen-btn-inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="232323" d="M9 4L11.5 9.5L17 12L11.5 14.5L9 20L6.5 14.5L1 12L6.5 9.5L9 4M9 8.83L8 11L5.83 12L8 13L9 15.17L10 13L12.17 12L10 11L9 8.83M19 9L17.74 6.26L15 5L17.74 3.75L19 1L20.25 3.75L23 5L20.25 6.26L19 9M19 23L17.74 20.26L15 19L17.74 17.75L19 15L20.25 17.75L23 19L20.25 20.26L19 23Z" />
            </svg>
        </div>`
    )
}