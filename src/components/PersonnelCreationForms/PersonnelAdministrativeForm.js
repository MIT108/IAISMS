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


    const roles = [
        { value: 'chocolate', label: 'Teacher' },
        { value: 'strawberry', label: 'Admin' },
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
                            <h3 className="pt-3 pt-4">Personnel Function</h3>
                            <FormGroup>
                                <Label
                                    for="department"
                                >
                                    Department
                                </Label>
                                <Input
                                    id="department"
                                    name="department"
                                    type="select"
                                >
                                    <option>
                                        Select Department
                                    </option>
                                    <option>
                                        Department of Studies
                                    </option>
                                    <option>
                                        Department of Discipline
                                    </option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="title">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="e.g Discipline Master 1"
                                    type="text"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="role">
                                    Role(s)
                                </Label>
                                <Select
                                    defaultValue={[roles[0]]}
                                    isMulti
                                    name="role"
                                    options={roles}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                        <Label for="gender">
                                            Status
                                        </Label>
                                        <Row>
                                            <Col md={2}>
                                                <FormGroup check>
                                                    <Input
                                                        name="radio1"
                                                        type="radio"
                                                    />
                                                    {' '}
                                                    <Label check>
                                                        Active
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col md={2}>
                                                <FormGroup check>
                                                    <Input
                                                        name="radio1"
                                                        type="radio"
                                                    />
                                                    {' '}
                                                    <Label check>
                                                        Inactive
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col md={2}>
                                                <FormGroup check>
                                                    <Input
                                                        name="radio1"
                                                        type="radio"
                                                    />
                                                    {' '}
                                                    <Label check>
                                                        Suspended
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                        </Form>
                        <div class="d-flex flex-row-reverse">
                        <Button
                            color="primary"
                            className="mr-4"
                            onClick={() => setCreateActive(true)}
                        >
                            Create
                        </Button>
                    </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Icons;
