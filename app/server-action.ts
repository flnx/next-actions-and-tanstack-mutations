'use server';

export const deleteSomething = async (id: number) => {
  await new Promise((res) => setTimeout(res, 500));

  return id;
};
