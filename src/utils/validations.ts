import dayjs from 'dayjs';

export const validateDateTime = (
  day: string,
  month: string,
  hour: string,
  minutes: string,
): void => {
  const now = dayjs();
  const date = dayjs(
    `${new Date().getFullYear()}-${month}-${day} ${hour}:${minutes}`,
  );

  if (!date.isValid()) {
    throw new Error('Ops... Data ou horário inválidos!');
  }

  if (date.isBefore(now)) {
    throw new Error('Ops... Esta data ou horário estão no passado!');
  }
};
