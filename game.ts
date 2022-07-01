// 需要实现的类
class BLGame {
  constructor() {}

  // 每次投球得分记录
  private records: number[] = [];
  // 计算出来的每一轮有效得分，长度为 10
  private roundScores: number[] = [];

  // 记录击倒球瓶数
  public roll(pins: number): void {
    this.records.push(pins);
  }

  // 获取总分
  public score(): number {
    this.goThroughRecords();
    const result = this.roundScores.reduce((sum, record) => {
      return isNaN(record) ? sum : sum + record;
    }, 0);

    return result;
  }

  private goThroughRecords(): void {
    let roundIndex = 0; // 每一轮,总共 10 轮
    let skip = false; // 是否跳过，补中情况和两次得分不够10，第二次 record 应该跳过，算作补中这一轮分数

    this.records.forEach((record: number, index: number) => {
      let currentRoundScore = 0; // 该轮得分

      if (roundIndex > 10) {
        return;
      }

      if (skip) {
        skip = false;
        return;
      }

      if (record === 10) {
        // 全中
        currentRoundScore =
          10 + this.records[index + 1] + this.records[index + 2];
        this.roundScores.push(currentRoundScore);
        roundIndex++;
        return;
      } else if (record + this.records[index + 1] === 10) {
        // 补中
        currentRoundScore = 10 + this.records[index + 2];
        this.roundScores.push(currentRoundScore);
        roundIndex++;
        skip = true;
        return;
      } else {
        // 两次得分不到 10
        currentRoundScore = record + this.records[index + 1];
        this.roundScores.push(currentRoundScore);
        roundIndex++;
        skip = true;
        return;
      }
    });
  }
}

// // 所有击倒球瓶数：(1, 4), (4, 5), (6, 4), (5, 5), (10), (0, 1), (7, 3), (6, 4), (10), (2, 8, 6)
const example = new BLGame();
[1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6].forEach((pins) => {
  example.roll(pins);
});
example.score(); // 133
