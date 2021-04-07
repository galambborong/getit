export const handleSentence = (bodyStr) => {
  const sentencesRegex = /^(.*?)[.?!]\s/g;
  const sentences = bodyStr.match(sentencesRegex);
  const rawSentence = sentences === null ? bodyStr : sentences[0];
  const sentence = rawSentence.slice(0, -2);
  return sentence;
};
