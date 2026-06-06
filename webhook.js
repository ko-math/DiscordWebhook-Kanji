
const webhookUrl = process.env.DISCORD_KOMATH_KANJI;
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
                        text: "今日の漢字"
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
    "叶",
    `
    読み:キョウ・かな-う
    意味:
    ①あわせる。力を合わせる。
    ②ともにする。
    ③かなう。
    ④やわらぐ。
    ⑤したがう。
    
    熟語.
    ・叶力-力を合わせる。
    ・叶同-心や力を合わせる。
    ・叶和-仲良くする。
    参考.
    「協」の古い異体字。古字。
    `,
    "",
    "https://kanji.jitenon.jp/kanjie/2318"
);
