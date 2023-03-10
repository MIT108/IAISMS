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
    Row,
    Col,
    Badge,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    Label,
    FormText,
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
import MultiStep from 'react-multistep'
import PersonalInfoForm from "components/CompetitiveExamRegistrationForms/PersonalInfoForm"
import CompetitiveExamSelectionForm from "components/CompetitiveExamRegistrationForms/CompetitiveExamSelectionForm"
import CompetitiveExamAttachedDocumentForm from "components/CompetitiveExamRegistrationForms/CompetitiveExamAttachedDocumentForm"
import CompetitiveExamPaymentForm from "components/CompetitiveExamRegistrationForms/CompetitiveExamPaymentForm"

const Index = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");
    const [createActive, setCreateActive] = useState(false);

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
    if (createActive) {
        return (
            <>
                <Header />
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col d-flex justify-content-center" >
                            <Card className="shadow" style={{
                                width: '50rem'
                            }}>
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Competitive Exams Candidate Creation</h3>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <MultiStep activeStep={0} 
                                prevButton={{style:{ padding: '5px',borderRadius: '12px', marginLeft: '10px', marginRight: '2px' }}}
                                nextButton={{style:{ padding: '5px',borderRadius: '12px', marginLeft: '10px', marginRight: '2px' }}}>
                                    <CompetitiveExamSelectionForm title='Step 1'/>
                                    <PersonalInfoForm title='Step 2'/>
                                    <CompetitiveExamAttachedDocumentForm title='Step 3'/>
                                    <CompetitiveExamPaymentForm title='Step 4'/>
                            </MultiStep>
                                <CardFooter className="py-3">
                                    {/* <div class="d-flex flex-row-reverse">
                                        <Button
                                            color="danger"
                                            onClick={() => setCreateActive(false)}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            color="primary"
                                            className="mr-4"
                                            onClick={() => setCreateActive(true)}
                                        >
                                            Create
                                        </Button>
                                    </div> */}
                                </CardFooter>
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
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Competitive Exams Candidates</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                onClick={() => setCreateActive(true)}
                                                size="sm"
                                            >
                                                Create
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center">
                                    <Col xs="8">
                                            <div  className="py-3">
                                                <Button color="primary">
                                                    primary
                                                </Button>
                                                {' '}
                                                <Button>
                                                    secondary
                                                </Button>
                                                {' '}
                                                <Button color="success">
                                                    success
                                                </Button>
                                                {' '}
                                                <Button color="info">
                                                    info
                                                </Button>

                                            </div></Col>
                                        <Col xs="4">
                                            <div className="py-3" >
                                                <Form className="text-right navbar-search navbar-search-dark">
                                                    <FormGroup className="mb-0">
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="fas fa-search" style={{ color: 'black' }} />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input placeholder="Search" type="text" style={{ color: 'black' }} />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Form>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Candidate</th>
                                            <th scope="col">Session</th>
                                            <th scope="col">Center</th>
                                            <th scope="col">Register Date</th>
                                            <th scope="col">Field/Level</th>
                                            <th scope="col">Status</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt="..."
                                                            src={require("../../assets/img/theme/bootstrap.jpg")}
                                                        />
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Chum Royce
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>March 2022</td>
                                            <td>Yaounde</td>
                                            <td>19/03/2022</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning" />
                                                    SE/1
                                                </Badge>
                                            </td>
                                            <td>
                                            <h3>
                                                <Badge
                                                    color="success"
                                                    pill
                                                >
                                                    Approved
                                                </Badge>
                                            </h3>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            View
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Edit
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Delete
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0"
                                        >
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    tabIndex="-1"
                                                >
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
};

export default Index;
