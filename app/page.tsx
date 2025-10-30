import MainBanner from "./components/homepage/MainBanner";
import ServicesMap from "./components/homepage/ServicesMap";
import Partner from "./components/homepage/Partner";
import ClientList1 from "./components/homepage/ClientList1";
import CombinedCat from "./components/homepage/CombinedCat";
import CreateVal from "./components/homepage/CreateVal";
import Momentum from "./components/homepage/Momentum";
import Network from "./components/homepage/Network";
import Capability from "./components/homepage/Capability";
import DataAnly from "./components/homepage/DataAnly";
// import OrbitLayout from "./components/homepage/OrbitLayout";
// import ProblemSolv from "./components/homepage/ProblemSolv";
// import GreatResult from "./components/homepage/GreatResult";
// import ScrumPage from "./components/homepage/ScrumPage";
// import ConsultationCTA from "./components/homepage/ConsultationCTA";
// import GoodInsights from "./components/homepage/GoodInsights";

import "./globals.css";











export default function Home() {
  return (
    <>
    <MainBanner />
    <ServicesMap />
    <Partner />
    <ClientList1/>
    <CombinedCat/>
    <CreateVal/>
    <Momentum/>
    <Network/>
    <Capability/>
    <DataAnly/>
    {/* <OrbitLayout /> */}
    {/* <ProblemSolv />
    <GreatResult /> */}
    {/* <ScrumPage /> */}
    {/* <ConsultationCTA/>
    <GoodInsights/> */}
    </>
  );
}
