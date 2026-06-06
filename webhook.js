
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
    "閄",
    `
    読み:コク・ワク
    意味:物陰から急に飛び出して人を驚かせる時に発する声。一部の辞書では
    「カク・セン」と記されている。
    大漢和辞典では
    **「きゅうにとびだしてひとをおどろかせるこゑ 」**
    という訓読みがあると言われているが、人々の合意はない。
    また、
    「わっ-と」
    という用例も見られる。

    用例.
    ・**『会談興晤閄雅話』**
    （かいだんおとしばなしももんがわ・かいだんきょうごももんがわ）
    -振鷺亭主人作の寛政期の咄本。「ももん」と読ませている。
    ・**『なんだかとっても！ いいかんじ』**
    -卑屈Pの初音ミク使用楽曲。サビで「閄」という漢字が
    「ものかげからきゅうにとびだしてひとをおどろかせるときにはっするこえ」
    という読み方で使用されている。
    `,
    "https://ja.wikipedia.org/wiki/%E9%96%84#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Monhito.gif",
    "https://ja.wikipedia.org/wiki/%E9%96%84"
);
