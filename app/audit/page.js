import DashboardHeader from "../templates/layout/DashboardHeader";

export default function DashboardLayout() {
    return (
      <section className="w-full">
        <DashboardHeader/>
        <section className="p-8">
          <p>This is the audit</p>
        </section> 
      </section>
    )
}
