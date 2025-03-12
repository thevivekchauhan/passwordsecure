import zxcvbn from "zxcvbn";

export const checkPasswordStrength = (password) => {
  const result = zxcvbn(password);
  return {
    score: (result.score / 4) * 100,
    crackTime: result.crack_times_display.offline_slow_hashing_1e4_per_second,
  };
};