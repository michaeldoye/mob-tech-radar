import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RadarConfig, radarConfig } from "./components/radar";
import api from "./apis/api.config";

declare function radar_visualization(config: RadarConfig): void;
declare const gapi: any;

var authorizeButton: any = document.getElementById("authorize_button");
var signoutButton: any = document.getElementById("signout_button");
class App extends Component {
  constructor(props: any) {
    super(props);
    this.initClient = this.initClient.bind(this);
  }

  componentDidMount(): void {
    radar_visualization(radarConfig);
    this.handleClientLoad();
  }

  handleClientLoad() {
    gapi.load("client:auth2", this.initClient);
  }

  initClient() {
    gapi.client
      .init({
        apiKey: api.API_KEY,
        clientId: api.CLIENT_ID,
        discoveryDocs: api.DISCOVERY_DOCS,
        scope: api.SCOPES
      })
      .then(
        () => {
          // Listen for sign-in state changes.
          gapi.auth2
            .getAuthInstance()
            .isSignedIn.listen(this.updateSigninStatus.bind(this));

          // Handle the initial sign-in state.
          this.updateSigninStatus(
            gapi.auth2.getAuthInstance().isSignedIn.get()
          );
          authorizeButton.onclick = this.handleAuthClick;
          signoutButton.onclick = this.handleSignoutClick;
        },
        (error: any) => {
          this.appendPre(JSON.stringify(error, null, 2));
        }
      );
  }

  updateSigninStatus(isSignedIn: any) {
    if (isSignedIn) {
      authorizeButton.style.display = "none";
      signoutButton.style.display = "block";
      this.listFiles();
    } else {
      authorizeButton.style.display = "block";
      signoutButton.style.display = "none";
    }
  }

  appendPre(message: any) {
    const pre: any = document.getElementById("content");
    const textContent = document.createTextNode(message + "\n");
    pre.appendChild(textContent);
  }

  listFiles() {
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: "nextPageToken, files(id, name)"
      })
      .then((response: any) => {
        this.appendPre("Files:");
        var files = response.result.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            this.appendPre(file.name + " (" + file.id + ")");
          }
        } else {
          this.appendPre("No files found.");
        }
      });
  }

  /**
   *  Sign in the user upon button click.
   */
  handleAuthClick(event: MouseEvent) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  handleSignoutClick(event: MouseEvent) {
    gapi.auth2.getAuthInstance().signOut();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <svg id="radar" />
      </div>
    );
  }
}

export default App;
