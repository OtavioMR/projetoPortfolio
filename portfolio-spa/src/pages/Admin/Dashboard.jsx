import DashboardPerfil from "../../components/dashboard/dashboardPerfil";
import DashboardSobre from "../../components/dashboard/dashboardSobre";
import DashboardProfissional from "../../components/dashboard/dashboardProfissional";
import DashboardAcademico from "../../components/dashboard/dashboardAcademico";
import DashboardCertificado from "../../components/dashboard/dashboardCertificados";
import DashboardProjetos from "../../components/dashboard/dashboardProjetos";
import DashboardContato from "../../components/dashboard/dashboardContato";

function Dashboard() {
  return (
    <div>
      <div className="container px-3 px-md-0 py-0 my-5">
        <DashboardPerfil />
        <DashboardSobre />
        <DashboardProfissional />
        <DashboardAcademico />
        <DashboardCertificado />
        <DashboardProjetos />
        <DashboardContato />
      </div>

    </div>
  );
}

export default Dashboard;
