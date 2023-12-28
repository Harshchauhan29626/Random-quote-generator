const quotes = [
    "\"Hope is the belief in the probability of the possible rather than the necessity of the probable.\"",
    "\"There’s a real sweet spot between challenge and hope leaders make pathways that keep both firmly in view.\"",
    "\"Young people have an almost biological destiny to be hopeful.\"",
    "\"Well-told stories help turn moments of great crises into moments of new beginnings.\"",
    "\"When we tell a story we enable the listener to enter its time and place with us, feel what we feel.\"",
    "\"Narrative is not talking “about” values; rather narrative embodies and communicates values.\"",
    "\"The moral of a successful story is emotionally experienced understanding, not only the head.\"",
    "\"Storytelling may be what most distinguishes social movements from interest groups.\"",
    "\"The fact of the matter is, when resisting change becomes more “costly” than accepting change.\"",
    "\"Challenging the status quo takes commitment, and, above all, dedication to learning\"",
    "\"The challenge of the heart is one of motivation, of urgent need to act, and the courage to risk it.\"",
    "\"To be able to forgive we must first meet the legitimate needs of the s of us that don’t want to forgive.\"",]

function quoteGen() {
    const quoteCon = document.getElementById("quote");
    const rendomquote = Math.floor(Math.random() * quotes.length)
    quoteCon.textContent = quotes[rendomquote];
}

quoteGen();