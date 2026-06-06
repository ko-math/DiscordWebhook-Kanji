
//const webhookUrl = process.env.DISCORD_KOMATH_KANJI;
console.log(secrets.DISCORD_KOMATH_KANJI);
/*
async function sendKanji(kanji, explanation, imageUrl, articleUrl) {
    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: kanji,
                    description: explanation,
                    url: articleUrl,
                    color: 0x3498db,
                    image: {
                        url: imageUrl
                    },
                    footer: {
                        text: "今日の面白い漢字"
                    }
                }
            ]
        })
    });
    if (!response.ok) {
        console.error(`Error: ${response.status}`);
        return;
    }

console.log("送信成功");
}

sendKanji(
    "𠄔",
    "まぼろし",
    "https://kanji.jitenon.jp/shotai3/27916.gif",
    "https://kanji.jitenon.jp/kanjiy/27916#google_vignette"
);
*/