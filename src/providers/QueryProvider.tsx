import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const maxAge = 1000 * 60 * 60 * 24; // 24 hours

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: maxAge,
    },
  },
});

export default function QueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

// const asyncStoragePersister = createAsyncStoragePersister({
//   storage: AsyncStorage,
// });

// export default function QueryProvider({ children }: PropsWithChildren) {
//   return (
//     <PersistQueryClientProvider
//       persistOptions={{
//         persister: asyncStoragePersister,
//         maxAge,
//       }}
//       client={queryClient}
//     >
//       {children}
//     </PersistQueryClientProvider>
//   );
// }
