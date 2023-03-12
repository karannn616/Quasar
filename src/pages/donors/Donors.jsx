import "../list/list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatabletwo from "../../components/datatabletwo/Datatabletwo";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatabletwo />
      </div>
    </div>
  );
};

export default List;
