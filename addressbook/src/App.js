import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Menu from './component/menu';
import Book from './component/book';
import Add from './component/add';
import { Autocomplete, Row, Col, Input, Button, Modal, ModalHeader, ModalBody, Fa } from 'mdbreact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Book />
        <Input label="Enter new address" icon="lock" iconClass="dark-grey" />
        <Button color="primary">Save</Button>
      </div>
    );
  }
}

export default App;
