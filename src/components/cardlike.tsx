import React, { useState, useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import getList from "../services/list";
import Table from "react-bootstrap/Table";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class CardLike extends React.Component {
  constructor(props) {
    super(props);
    //  let { list } = this.props.params;
    this.state = {
      lists: [],
      isFlag: false,
      count: 0,
    };
  }

  componentDidMount() {
    this.listRead();
  }

  listRead() {
    getList()
      .then((res) => {
        console.log(res.data);
        let numRows = res.data.list.length;
        this.setState({
          lists: res.data.list,
          Status: 200,
          isFlag: true,
          count: numRows || 0,
        });
      })
      .catch((err) => {
        let List = {
          List: [],
          Status: 404,
        };

        this.setState({ lists: List, isFlag: true, count: 0 });
      });
  }

  render() {
    const lists = this.state.lists;
    const isFlag = this.state.isFlag;
    const Status = this.state.lists.Status;

    if (!isFlag && Status !== 404) {
      return (
        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-2">
              <span className="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
            <div className="col-sm-8">
              <div id="pre-loader" className="pre-loader">
                {" "}
                <img src="#" title="Fetching..." />
              </div>
              <p>
                <br />{" "}
              </p>
            </div>
            <div className="col-sm-2">
              <span className="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
          </div>
        </div>
      );
    }

    if (isFlag && Status !== 404) {
      return (
        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-2">
              <span className="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
            <div className="col-sm-8">
              <h1>2Q</h1>
              <h6>GET data from this https://mocki.io/v1/50abfd24-2845-4dd7-bcce-9bd732e25c47 API to listed here</h6>
              <div className="row">
                <div className="col-sm-12">
                  {lists.map((list) => (
                 
                 <div className={list.type?'card-block':'card-hide'}> 
                    <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card Containers Type  - {list.type}</h5>
                      <Table striped bordered hover size="sm">
                        <tbody>
                          <tr key={list.id}>
                            <th>name</th> <td>&nbsp; {list.name}  </td>
                            <th>number</th> <td>&nbsp; {list.number} </td>
                            <th>id</th> <td>&nbsp; {list.id} </td>
                            <th>type</th> <td>&nbsp; {list.type} </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  </div>
                  ))}
                </div>
              </div>
              <div className="row">&nbsp;</div>
            </div>

            <div className="col-sm-2">
              <span className="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
          </div>
          <div className="row">&nbsp;</div>
          <div className="row">&nbsp;</div>
        </div>
      );
    }

    if (isFlag && (Status === "Error" || Status == 404)) {
      //  window.location = '/404';
      return (
        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-3">
              <span className="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
            <div className="col-sm-6">
              <div className="row"> Not found! </div>
              <p>
                <br />{" "}
              </p>
            </div>

            <div className="col-sm-3">
              <span className="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withParams(CardLike);
