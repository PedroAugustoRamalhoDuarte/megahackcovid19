import React, { Component } from "react";
import { Container, Nav } from "./styled-components";
import { Link } from "react-router-dom";

// fusioncharts
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Maps from "fusioncharts/fusioncharts.maps";
import USARegion from "fusionmaps/maps/es/fusioncharts.usaregion";
import ReactFC from "react-fusioncharts";
import "./charts-theme";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Step 6 - Adding the chart and theme as dependency to the core fusioncharts

import config from "./config";
import Dropdown from "react-dropdown";
import formatNum from "./format-number";

import UserImg from "./assets/images/user-img-placeholder.jpeg";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

// Preparing the chart data
const chartData = [
  {
    label: "Dalacin C",
    value: "290",
  },
  {
    label: "Alektos",
    value: "260",
  },
  {
    label: "Novalgina",
    value: "180",
  },
  {
    label: "Alivium",
    value: "140",
  },
  {
    label: "Maresys",
    value: "115",
  },
  {
    label: "Predsim",
    value: "100",
  },
];

const chartDataThree = [
  {
    label: "Imunologista",
    value: "290",
  },
  {
    label: "Ortopedista",
    value: "260",
  },
  {
    label: "Alergista",
    value: "180",
  },
  {
    label: "Oncologia",
    value: "140",
  }
];

// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: "column2d",
  renderAt: "chartContainer",
  width: "550",
  height: "350",
  dataFormat: "json",
  chart: {
    borderColor: "#666666",
    borderThickness: "4",
    borderAlpha: "80",
  },
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Dinheiro gasto com cada remédio [2019-20]", //Set the chart caption
      xAxisName: "Remédios", //Set the x-axis name
      yAxisName: "R$", //Set the y-axis name
      theme: "fusion", //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartData,
  },
};

const chartConfigTwo = {
  type: "pie2d",
  renderAt: "chart-container",
  width: "550",
  height: "350",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Porcentagem de uso de cada medicamento",
      subCaption: "2020",
      numberPrefix: "$",
      showPercentInTooltip: "0",
      decimals: "1",
      //Theme
      theme: "fusion",
      tooltipBorderRadius: "20",
    },
    data: [
      {
        label: "Novalgina",
        value: "285040",
      },
      {
        label: "Dalacin C",
        value: "146330",
      },
      {
        label: "Alivium",
        value: "105070",
      },
      {
        label: "Predsim",
        value: "49100",
      },
    ],
  },
};

const chartConfigThree = {
  type: "column2d",
  renderAt: "chartContainer",
  width: "550",
  height: "350",
  dataFormat: "json",
  chart: {
    borderColor: "#666666",
    borderThickness: "4",
    borderAlpha: "80",
  },
  dataSource: {
    // Chart Configuration
    chart: {
      caption: "Dinheiro gasto com cada consulta [2019-20]", //Set the chart caption
      xAxisName: "Consultas", //Set the x-axis name
      yAxisName: "R$", //Set the y-axis name
      theme: "fusion", //Set the theme for your chart
    },
    // Chart Data - from step 2
    data: chartDataThree,
  },
};

class AnaliseRemedio extends Component {
  render() {
    return (
      <div className="main-div">
        <div className="first-box position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block">
            <div className="container-fluid min-vw-100 p-5">
              <div className="chart-container">
                <ReactFC {...chartConfigs} />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="container-fluid">
                <div className="chart-container">
                  <ReactFC {...chartConfigTwo} />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="container-fluid">
                <div className="chart-container">
                  <ReactFC {...chartConfigThree} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <p>Splash!</p>
              <small className="d-block mb-3 text-muted">© 2020-2021</small>
            </div>

            <div className="col-6 col-md">
              <h5>Sobre</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Time
                </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Localização
                </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Privacidade
                </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Termos
                </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>Contato</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Instagram
                </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Facebook
                </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Github
                </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Youtube
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default AnaliseRemedio;
