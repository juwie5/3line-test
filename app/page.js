import DashboardHeader from "./templates/layout/DashboardHeader";

export default function Home() {
  return (
      <main className="w-full">
          <DashboardHeader/>
          <section className="p-8">
          <p>This is the home page</p>
        </section> 
      </main>
  );
}
