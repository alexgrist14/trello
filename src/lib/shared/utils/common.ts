const getRoundedSeconds = (value: number) => {
  const seconds = Math.abs(value);

  if (seconds < 10) {
    return -1;
  } else if (seconds < 20) {
    return -10;
  } else if (seconds < 30) {
    return -20;
  } else if (seconds < 40) {
    return -30;
  } else if (seconds < 50) {
    return -40;
  } else {
    return -50;
  }
};

export const getHumanDate = (inputDate: Date | string) => {
  const currentDate = new Date();
  const targetDate = new Date(inputDate);

  const differenceInMs = targetDate.getTime() - currentDate.getTime();

  const differenceInSeconds = Math.round(differenceInMs / 1000);
  const differenceInMinutes = Math.round(differenceInMs / (1000 * 60));
  const differenceInHours = Math.round(differenceInMs / (1000 * 60 * 60));
  const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));
  const differenceInMonths = Math.round(differenceInDays / 30);
  const differenceInYears = Math.round(differenceInMonths / 12);

  const relativeTime = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  if (Math.abs(differenceInSeconds) < 60) {
    return relativeTime.format(
      getRoundedSeconds(differenceInSeconds),
      "second"
    );
  } else if (Math.abs(differenceInMinutes) < 60) {
    return relativeTime.format(differenceInMinutes, "minute");
  } else if (Math.abs(differenceInHours) < 24) {
    return relativeTime.format(differenceInHours, "hour");
  } else if (Math.abs(differenceInDays) < 30) {
    return relativeTime.format(differenceInDays, "day");
  } else if (Math.abs(differenceInMonths) < 12) {
    return relativeTime.format(differenceInMonths, "month");
  } else {
    return relativeTime.format(differenceInYears, "year");
  }
};
