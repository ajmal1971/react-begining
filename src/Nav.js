import { Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useThemeContext from "./contexts/ThemeContext";
import useCartContext from "./contexts/CartContext";

export default function Nav() {
    const { themeMode, modeLabel, switchTheme } = useThemeContext();
    const { selectedMobiles } = useCartContext();
    
    function onChangeMode() {
        switchTheme(themeMode);
    }

    return (

        <Row style={{ borderBottom: '1px solid #dbdbdb' }}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className="nav-wrapper">
                    <ul style={{ float: "left" }}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/add-to-cart">Add To Cart App</NavLink></li>
                        <li>
                            <NavLink>Tutorials</NavLink>
                            <ul className="submenu">
                                <li><NavLink to="/tutorials/class-component">Class Component</NavLink></li>
                                <li><NavLink to="/tutorials/use-effect">useEffect</NavLink></li>
                                <li><NavLink to="/tutorials/Fragment">Fragment</NavLink></li>
                                <li><NavLink to="/tutorials/lifting-state-up">Lifting State Up</NavLink></li>
                                <li><NavLink to="/tutorials/use-memo">useMemo</NavLink></li>
                                <li><NavLink to="/tutorials/use-ref">useRef</NavLink></li>
                                <li><NavLink to="/tutorials/higher-order-components">Higher Order Components</NavLink></li>
                                <li><NavLink to="/tutorials/api-calling">Api Calling</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Col>

            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className="form-group" style={{paddingTop: '15px'}}>
                    <span style={{ float: "right", marginRight: '15px' }}>Cart: {selectedMobiles.length}</span>

                    <Form.Check
                        type="switch"
                        id="theam-switcher"
                        label={modeLabel}
                        value=""
                        style={{ float: "right", marginRight: '15px' }}
                        checked={themeMode === 'dark'}
                        onChange={onChangeMode}
                    />
                </div>
            </Col>
        </Row>
    );
}