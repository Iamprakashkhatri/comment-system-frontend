export function timeAgo(minParam) {

  if (!minParam) {
    return null;
  }

  let minutes = Math.floor(minParam);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(days / 30);
  let years = Math.floor(months / 12);

  if (minParam < 1) {
    return `${ Math.floor(minParam * 60) } seconds ago`;
  } else if (minParam < 60) {
    return `${ minutes } minutes ago`;
  } else if (minParam < 60 * 24) {
    return `${ hours } hours ago`;
  } else if (minParam < 60 * 24 * 7) {
    return `${ days } days ago`;
  } else if (minParam < 60 * 24 * 30) {
    return `${ weeks } weeks ago`;
  } else if (minParam < 60 * 24 * 365) {
    return `${ months } months ago`;
  } else {
    return `${ years } years ago`;
  }

}