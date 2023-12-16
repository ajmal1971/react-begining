import { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";

function APICalling() {
    let [member, setMember] = useState({ id: 0, memberName: "", memberAddress: "", memberContact: "", nid: "" });
    let [members, setMembers] = useState([]);
    let [filters, setFilters] = useState({ id: null, memberName: null, nid: null });

    function search() {
        getMembers();
    };

    function saveMember() {
        if (member.id === 0) {
            createMember();
        } else {
            updateMember();
        }
    }

    function createMember() {
        const input = {
            memberName: member.memberName,
            memberAddress: member.memberAddress,
            memberContact: member.memberContact,
            nid: member.nid
        }

        fetch('https://localhost:7061/api/Member/CreateMember', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        }).then((res) => {
            res.json().then((jsonData) => {
                getMembers();
            })
        })
    }

    function deleteMember(record) {
        fetch(`https://localhost:7061/api/Member/DeleteMember?_id=${record.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            res.json().then(() => {
                getMembers();
            })
        })
    }

    function updateMember() {
        const input = {
            id: member.id,
            memberName: member.memberName,
            memberAddress: member.memberAddress,
            memberContact: member.memberContact,
            nid: member.nid
        }

        fetch('https://localhost:7061/api/Member/UpdateMember', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        }).then((res) => {
            res.json().then((jsonData) => {
                getMembers();
            })
        })
    }

    function getMembers() {
        fetch('https://localhost:7061/api/Member/RetrieveMembers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filters)
        }).then((res) => {
            res.json().then((jsonData) => {
                setMembers(jsonData);
            })
        })
    }

    const onInputChange = (prop, value) => {
        setMember((current) => ({
            ...current,
            [prop]: value
        }))
    }

    function initiateUpdateForm(record) {
        setMember({
            id: record.id,
            memberName: record.memberName,
            memberAddress: record.memberAddress,
            memberContact: record.memberContact,
            nid: record.nid
        });
    }

    return (
        <>
            <form style={{ marginTop: '5%' }} onSubmit={e => e.preventDefault()}>
                <Row>
                    <Col></Col>
                    <Col><h2>Member Information</h2></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <input className="form-control" placeholder="Member Name" value={member.memberName} onChange={(e) => onInputChange('memberName', e.target.value)} />
                        <br />
                        <input className="form-control" placeholder="Member Address" value={member.memberAddress} onChange={(e) => onInputChange('memberAddress', e.target.value)} />
                        <br />
                        <input className="form-control" placeholder="Member Contact" value={member.memberContact} onChange={(e) => onInputChange('memberContact', e.target.value)} />
                        <br />
                        <input className="form-control" placeholder="NID" value={member.nid} onChange={(e) => onInputChange('nid', e.target.value)} />
                        <br />
                        <Button style={{ marginRight: '5px' }} onClick={saveMember}>{member.id > 0 ? 'Update Member' : 'Save Member'}</Button>
                        <Button onClick={() => setMember({ id: 0, memberName: "", memberAddress: "", memberContact: "", nid: "" })}>{'Reset'}</Button>
                    </Col>
                    <Col></Col>
                </Row>
                <br />
                {/* Search Filter */}
                <Row>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                    <Col>
                        <div className="form-group" style={{ textAlign: "left" }}>
                            <label>MemberName</label>
                            <input className="form-control" placeholder="Member Name" value={filters.memberName} onChange={(e) => setFilters({ ...filters, memberName: e.target.value })} />
                        </div>
                    </Col>

                    <Col>
                        <div className="form-group" style={{ textAlign: "left" }}>
                            <label>NID</label>
                            <input className="form-control" placeholder="NID" value={filters.nid} onChange={(e) => setFilters({ ...filters, nid: e.target.value })} />
                        </div>
                    </Col>

                    <Col>
                        <Button style={{ marginTop: '15px' }} onClick={search}>Search</Button>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                </Row>

                <br />

                {/* Members Table */}
                <Row>
                    <Col>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Member Name</th>
                                    <th>Member Address</th>
                                    <th>Member Contact</th>
                                    <th>NID</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members.length > 0 ? (
                                        members.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.memberName}</td>
                                                    <td>{item.memberAddress}</td>
                                                    <td>{item.memberContact}</td>
                                                    <td>{item.nid}</td>
                                                    <td>
                                                        <Button style={{ marginRight: '5px' }} onClick={() => initiateUpdateForm(item)}>Update</Button>
                                                        <Button onClick={() => deleteMember(item)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ) : (<tr><td colSpan={6}>No Record Found!</td></tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </form>
        </>
    );
}

export default APICalling;