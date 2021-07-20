import dayjs from 'dayjs';

export const validateDateTime = (
  day: string,
  month: string,
  hour: string,
  minutes: string,
): void => {
  if (Number(day) < 1 || Number(day) > 31) {
    throw new Error('Ops... Dia inválido!');
  }

  if (Number(month) < 1 || Number(month) > 12) {
    throw new Error('Ops... Mês inválido!');
  }

  if (Number(hour) < 0 || Number(hour) > 23) {
    throw new Error('Ops... Hora inválida!');
  }

  if (Number(minutes) < 0 || Number(minutes) > 59) {
    throw new Error('Ops... Minutos inválidos!');
  }

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
