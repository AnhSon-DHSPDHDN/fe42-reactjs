import Avatar from "./components/Avatar";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Avatar
        name="Elon Musk"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-_R6V-nDMdEKuLC_LNEZG_BJ-6-m74_e1w&s"
      >
        <p>CEO: SpaceX</p>
      </Avatar>
      <Avatar
        isOnline={true}
        name="Trump"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MWm4Uc-yhWB5bkRg8r_Vy6ueABFtDb_qSA&s"
      />
      <Avatar
        name="Messi"
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwcenMcWH6gu_V9q3Qfl51mGnmlK38KoWzg&s"
      />

      <hr />
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Card color="gray"></Card>
        <Card color="yellow"></Card>
        <Card color="green"></Card>
      </div>
    </div>
  );
}

export default App;
