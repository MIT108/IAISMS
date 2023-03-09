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
                            <h3 className="pt-3 pt-4">Examination Required Documents</h3>
                            <FormGroup>
                                <Label for="exampleFile">
                                    File(s)
                                </Label>
                                <Input
                                    id="exampleFile"
                                    name="file"
                                    type="file"
                                    multiple
                                />
                                <FormText>
                                    Please ensure every uploaded document has a name that reflects the content and the name should begin with your name e.g Mbah_Royce_Application_letter.pdf
                                </FormText>
                            </FormGroup>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Icons;
