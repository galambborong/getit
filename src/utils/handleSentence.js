export const handleSentence = (bodyStr) => {
  const sentencesRegex = /^(.*?)[.?!]\s/g;
  const sentences = bodyStr.match(sentencesRegex);
  const rawSentence = sentences === null ? bodyStr : sentences[0];
  return rawSentence.slice(0, -2);
};
