/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    CardGroup,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    Label,
    CardFooter,
    List
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import Select from 'react-select'

const Index = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [activeCard, setActiveCard] = useState('default');

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };

    const requirements = [
        { value: 'chocolate', label: 'Birth Certificate' },
        { value: 'strawberry', label: 'Advanced Level' },
        { value: 'vanilla', label: 'Application Letter' }
    ];
    const centers = [
        { value: 'chocolate', label: 'Yaounde' },
        { value: 'strawberry', label: 'Douala' },
        { value: 'vanilla', label: 'Bafoussam' }
    ];
    const levels = [
        { value: 'chocolate', label: 'One' },
        { value: 'strawberry', label: 'Two' },
        { value: 'vanilla', label: 'Three' }
    ];
    const fields = [
        { value: 'chocolate', label: 'Software Engineering (Eng)' },
        { value: 'strawberry', label: 'Software Engineering (Fr)' },
        { value: 'vanilla', label: 'Networking (Fr)' }
    ];
    if (activeCard == 'concur') {
        return (
            <>
                <Header />
                <Container className="mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Concour Settings</h3>
                                </CardHeader>
                                <Row className="d-flex align-items-center align-self-center pr-7 pl-7">
                                    <Col md={5}>
                                        <FormGroup>
                                            <Label for="session">
                                                Field
                                            </Label>
                                            <Input
                                                id="session"
                                                name="email"
                                                placeholder="e.g Software Engineering"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <div class="d-flex flex-column bd-highlight mb-3">
                                            <div class="p-2 bd-highlight"><i className="ni ni-bold-right" /></div>
                                            <div class="p-2 bd-highlight"><i className="ni ni-bold-left" /></div>
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div class="d-flex flex-column bd-highlight mb-3" style={{
                                            borderRadius: '2%',
                                            border: 'solid',
                                            borderWidth: '1px',
                                            height: '150px',
                                            width: '300px',
                                            overflowY: 'scroll',
                                            overflowX: 'scroll'
                                        }}>
                                            <List type="unstyled m-2">
                                                <li>
                                                    Lorem ipsum dolor sit amet
                                                </li>
                                                <li>
                                                    Consectetur adipiscing elit
                                                </li>
                                                <li>
                                                    Integer molestie lorem at massa
                                                </li>
                                                <li>
                                                    Facilisis in pretium nisl aliquet
                                                </li>
                                                <li>
                                                    Faucibus porta lacus fringilla vel
                                                </li>
                                                <li>
                                                    Aenean sit amet erat nunc
                                                </li>
                                                <li>
                                                    Eget porttitor lorem
                                                </li>
                                            </List>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="d-flex align-items-center align-self-center pr-7 pl-7">
                                    <Col md={5}>
                                        <FormGroup>
                                            <Label for="session">
                                                Centers
                                            </Label>
                                            <Input
                                                id="session"
                                                name="email"
                                                placeholder="e.g Bafoussam"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <div class="d-flex flex-column bd-highlight mb-3">
                                            <div class="p-2 bd-highlight"><i className="ni ni-bold-right" /></div>
                                            <div class="p-2 bd-highlight"><i className="ni ni-bold-left" /></div>
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div class="d-flex flex-column bd-highlight mb-3" style={{
                                            borderRadius: '2%',
                                            border: 'solid',
                                            borderWidth: '1px',
                                            height: '150px',
                                            width: '300px',
                                            overflowY: 'scroll',
                                            overflowX: 'scroll'
                                        }}>
                                            <List type="unstyled m-2">
                                                <li>
                                                    Lorem ipsum dolor sit amet
                                                </li>
                                                <li>
                                                    Consectetur adipiscing elit
                                                </li>
                                                <li>
                                                    Integer molestie lorem at massa
                                                </li>
                                                <li>
                                                    Facilisis in pretium nisl aliquet
                                                </li>
                                                <li>
                                                    Faucibus porta lacus fringilla vel
                                                </li>
                                                <li>
                                                    Aenean sit amet erat nunc
                                                </li>
                                                <li>
                                                    Eget porttitor lorem
                                                </li>
                                            </List>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="d-flex align-items-center align-self-center pr-7 pl-7">
                                    <Col md={5}>
                                        <FormGroup>
                                            <Label for="session">
                                                Requirements
                                            </Label>
                                            <Input
                                                id="session"
                                                name="email"
                                                placeholder="e.g Applicaion Letter"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <div class="d-flex flex-column bd-highlight mb-3">
                                            <div class="p-2 bd-highlight"><i className="ni ni-bold-right" /></div>
                                            <div class="p-2 bd-highlight"><i className="ni ni-bold-left" /></div>
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div class="d-flex flex-column bd-highlight mb-3" style={{
                                            borderRadius: '2%',
                                            border: 'solid',
                                            borderWidth: '1px',
                                            height: '150px',
                                            width: '300px',
                                            overflowY: 'scroll',
                                            overflowX: 'scroll'
                                        }}>
                                            <List type="unstyled m-2">
                                                <li>
                                                    Lorem ipsum dolor sit amet
                                                </li>
                                                <li>
                                                    Consectetur adipiscing elit
                                                </li>
                                                <li>
                                                    Integer molestie lorem at massa
                                                </li>
                                                <li>
                                                    Facilisis in pretium nisl aliquet
                                                </li>
                                                <li>
                                                    Faucibus porta lacus fringilla vel
                                                </li>
                                                <li>
                                                    Aenean sit amet erat nunc
                                                </li>
                                                <li>
                                                    Eget porttitor lorem
                                                </li>
                                            </List>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    } else {
        return (
            <>
                <Header />
                <Container className="mt--7" fluid row>
                    <div>
                        {/* Card stats */}
                        <Row>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0" onClick={() => setActiveCard("account")}>
                                    <CardBody className="d-flex flex-column align-items-center">
                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mb-3">
                                            <i className="fas fa-chart-bar" />
                                        </div>
                                        <div>
                                            <CardTitle
                                                tag="h5"
                                                className="text-uppercase text-muted mb-0"
                                            >
                                                My Account
                                            </CardTitle>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0" onClick={() => setActiveCard("concur")}>
                                    <CardBody className="d-flex flex-column align-items-center">
                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mb-3">
                                            <i className="fas fa-chart-bar" />
                                        </div>
                                        <div>
                                            <CardTitle
                                                tag="h5"
                                                className="text-uppercase text-muted mb-0"
                                            >
                                                Competitive Exams
                                            </CardTitle>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0" onClick={() => setActiveCard("concur")}>
                                    <CardBody className="d-flex flex-column align-items-center">
                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mb-3">
                                            <i className="fas fa-chart-bar" />
                                        </div>
                                        <div>
                                            <CardTitle
                                                tag="h5"
                                                className="text-uppercase text-muted mb-0"
                                            >
                                                Departments
                                            </CardTitle>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0" onClick={() => setActiveCard("concur")}>
                                    <CardBody className="d-flex flex-column align-items-center">
                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mb-3">
                                            <i className="fas fa-chart-bar" />
                                        </div>
                                        <div>
                                            <CardTitle
                                                tag="h5"
                                                className="text-uppercase text-muted mb-0"
                                            >
                                                Roles
                                            </CardTitle>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div class="mt-5">
                        <Row>
                            <Col lg="6" xl="3">
                                <Card className="card-stats mb-4 mb-xl-0" onClick={() => setActiveCard("concur")}>
                                    <CardBody className="d-flex flex-column align-items-center">
                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mb-3">
                                            <i className="fas fa-chart-bar" />
                                        </div>
                                        <div>
                                            <CardTitle
                                                tag="h5"
                                                className="text-uppercase text-muted mb-0"
                                            >
                                                Permissions
                                            </CardTitle>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        );
    }

};

export default Index;
