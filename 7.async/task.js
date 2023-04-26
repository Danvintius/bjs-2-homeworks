class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time) { 
      if (time.length == 0) {
        throw new Error("Отсутствуют обязательные аргументы");
      }
    for (let i = 0; i < alarmCollection.length; i++) {
      if (time == alarmCollection[i]) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }
    alarmCollection.push({callback, time, canCall: true});
  }

  removeClock(time) {
    alarmCollection.filter((alarm) => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    let d = new Date();
    return d.getHours() + ":" + d.getMinutes();
  }

  start() {
    if (this.intervalId != null) {
      return;
    }
    this.intervalId = setInterval(
        () =>
          this.alarmCollection.forEach((alarm) => {
            if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
              alarm.canCall = false;
              alarm.callback();
            }
          }),
        1000
      );
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = null;
  }
}