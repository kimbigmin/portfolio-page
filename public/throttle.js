// 스로틀 함수
export default function throttle(callback, delay) {
  let timerId;

  return (event) => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        callback(event);
        timerId = null;
      },
      delay,
      event
    );
  };
}
