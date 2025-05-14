import ShopList from '@/components/shopList';

export default function App() {
  return (
    <div className="relative flex min-h-svh flex-col bg-zinc-100">
      <div className="container mx-auto flex flex-1 flex-col items-center">
        <main className="grid max-w-7xl grid-cols-1 gap-4 bg-red-500 md:auto-rows-[18rem] md:grid-cols-3">
          <ShopList />
        </main>
      </div>
    </div>
  );
}
