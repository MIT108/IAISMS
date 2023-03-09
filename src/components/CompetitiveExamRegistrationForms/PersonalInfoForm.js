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
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
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
import Header from "components/Headers/Header.js";
import Select from 'react-select'

const Icons = () => {
    const [activeNav, setActiveNav] = useState(1);
    const [createActive, setCreateActive] = useState(false);


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
    const regions = [
        { value: 'chocolate', label: 'South West' },
        { value: 'strawberry', label: 'Littoral' },
        { value: 'vanilla', label: 'Networking (Fr)' }
    ];
    return (
        <>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col " >
                        <Form className="mt-6">
                            <h3 className="pt-3 pt-4">Personal Information</h3>

                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="firstName">
                                            First Name
                                        </Label>
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            placeholder="e.g Mbah"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="lastName">
                                            Last Name
                                        </Label>
                                        <Input
                                            id="lastName"
                                            name="lastName"
                                            placeholder="e.g Mbah"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="dateOfBirth">
                                            Date of Birth
                                        </Label>
                                        <Input
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            placeholder="22/03/2022"
                                            type="date"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup tag="fieldset">
                                        <Label for="gender">
                                            Gender
                                        </Label>
                                        <Row>
                                            <Col md={3}>
                                                <FormGroup check>
                                                    <Input
                                                        name="radio1"
                                                        type="radio"
                                                    />
                                                    {' '}
                                                    <Label check>
                                                        Male
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col md={3}>
                                                <FormGroup check>
                                                    <Input
                                                        name="radio1"
                                                        type="radio"
                                                    />
                                                    {' '}
                                                    <Label check>
                                                        Female
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="emailAddress">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="emailAddress"
                                            name="emailAddress"
                                            placeholder="e.g test@test.com"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="phoneNumber">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="+(237) 671 274 012"
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="address">
                                    Address
                                </Label>
                                <Input
                                    id="address"
                                    name="address"
                                    placeholder="Mendong"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label
                                    for="nationanlity"
                                >
                                    Nationanlity
                                </Label>
                                <Input
                                    id="nationanlity"
                                    name="nationanlity"
                                    type="select"
                                >
                                    <option>
                                        Select nationanlity
                                    </option>
                                    <option>
                                        Cameroon
                                    </option>
                                    <option>
                                        Chad
                                    </option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label
                                    for="region"
                                >
                                    Region of origin
                                </Label>
                                <Input
                                    id="region"
                                    name="region"
                                    type="select"
                                >
                                    <option>
                                        Select region
                                    </option>
                                    <option>
                                        Littoral
                                    </option>
                                    <option>
                                        South West
                                    </option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Icons;
