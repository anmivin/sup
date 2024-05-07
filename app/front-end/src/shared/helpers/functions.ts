export const isWithin = (posArray: number[], boxPosArray: number[]) => {
  return (
    posArray[0] > boxPosArray[0] - 100 &&
    posArray[0] < boxPosArray[0] + 100 &&
    posArray[1] > boxPosArray[1] - 100 &&
    posArray[1] < boxPosArray[1] + 100
  );
};
