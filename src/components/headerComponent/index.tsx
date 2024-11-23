import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button, Flex } from "antd";
import "./styles.scss";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="header-component">
      <Row>
        <Col span={20}>
          <ul className="navigation">
            <li className="navigation-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="navigation-item">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="navigation-item">
              <Link to={"/product"}>Product</Link>
            </li>
          </ul>
        </Col>
        <Col span={4}>
          <Flex
            style={{
              alignItems: "center",
              flexDirection: "row",
              height: "100%",
            }}
          >
            <Button onClick={handleLogout}>Logout</Button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderComponent;
