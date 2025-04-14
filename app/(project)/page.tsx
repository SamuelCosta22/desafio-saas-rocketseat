import Login from "./login/page";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World SAAS</h1>
      <Login />
    </div>
  );
}
