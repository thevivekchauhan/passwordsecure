export const formatCrackTime = (years) => {
  if (years >= 1000000000000) {
    return "1 trillion years";
  }
  if (years >= 1000000000) {
    return "1 billion years";
  }
  if (years >= 1000000) {
    return "1 million years";
  }
  if (years >= 1000) {
    return "1000 years";
  }
  if (years >= 200) {
    return "200 years";
  }
  if (years >= 100) {
    return "100 years";
  }
  if (years >= 50) {
    return "50 years";
  }
  return "Less than 50 years";
};
