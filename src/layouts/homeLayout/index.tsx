import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/headerComponent";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <HeaderComponent />
      <Outlet /> {/* Hien thi nested router */}
      <section>
        <h1>Footer</h1>
      </section>
    </div>
  );
};

export default HomeLayout;
