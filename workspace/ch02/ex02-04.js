// ex02-01.js 복사
(() => {
  class HighSchool {
    kor = 0;
    eng = 0;
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }
    sum() {
      return this.kor + this.eng;
    }
    avg() {
      // 평균은 소수 첫째자리에서 반올림
      return Math.round(this.sum() / 2);
    }
  }
})();
