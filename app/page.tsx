'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteSomething } from './server-action';

export default function Home() {
  const { data, isLoading } = useGetItems();
  const { mutate } = useDeleteItemWithServerAction();

  return (
    <section className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl mb-10">Home</h1>
      <div className="container mx-auto">
        {isLoading && <p className="py-2 text-center">Loading...</p>}
        <div className="grid grid-cols-1 sm:grid-cols:2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {data?.map((i) => (
            <div
              key={i}
              className={`bg-red-500 flex items-center justify-center h-40 rounded-xl cursor-pointer`}
              onClick={() => mutate(i)}
            >
              Click to delete {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const useDeleteItemWithServerAction = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteSomething,
    onMutate: (id) => {
      queryClient.setQueryData(['items'], (oldData: number[]) => {
        return oldData.filter((i) => i !== id);
      });
    },
  });
};

const useGetItems = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 200));

      const mockData = Array.from({ length: 10 }, (_, i) => i + 1);

      return mockData;
    },
  });
};
