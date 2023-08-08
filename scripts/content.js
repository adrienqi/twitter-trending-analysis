
const summarize = async (topic) => {
    const response = await fetch( `https://api.openai.com/v1/chat/completions`,
        {
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: `Please provide a 2 sentence summary of ${topic}`}],
            }),    
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer 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`,
            },
        }
    )
    
    if (!response.ok) {
        throw new Error("response was not OK")
    }

    const output = await response.json()

    console.log(output.choices[0].message.content)
    return output.choices[0].message.content

    
    // .then((response) => {
    //     if (response.ok) {
    //         response.json().then((json) => {
    //             console.log(json.choices[0].message.content)
    //             return json.choices[0].message.content
    //         });
    //     }
    // })
    // .catch(console.error)
}

const timer = setInterval(() => {
    const trendingList = document.querySelectorAll(".css-901oao.r-1nao33i.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-1bymd8e.r-bcqeeo.r-qvutc0");
    if (trendingList) {
        clearTimeout(timer);
        console.log(trendingList);
        trendingList.forEach(async topic => {
            const badge = document.createElement("p");
            badge.classList.add("color-secondary-text", "type--caption");

            const output = await summarize(topic.textContent)
            badge.textContent = output
            
            console.log(topic.textContent)
            const topicChild = topic.childNodes[0]
            console.log(topicChild)
            topicChild.appendChild(badge)
        })
    }
}, 1000);