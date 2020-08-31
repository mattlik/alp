import React from "react"
import axios from "axios"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emergency: false,
      leak: false,
      water: false,
      drain: false,
      nodig: false,
      other: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onNext = this.onNext.bind(this)

    this.onChangeEmergency = this.onChangeEmergency.bind(this)
    this.onChangeLeak = this.onChangeLeak.bind(this)
    this.onChangeWater = this.onChangeWater.bind(this)
    this.onChangeDrain = this.onChangeDrain.bind(this)
    this.onChangeNodig = this.onChangeNodig.bind(this)
    this.onChangeOther = this.onChangeOther.bind(this)
  }
  onNext(event) {
    const slideOne = document.getElementById("firstSlide")
    const slideTwo = document.getElementById("secondSlide")
    slideOne.style.display = "none"
    slideTwo.style.display = "block"
  }
  handleChange(event) {
    this.setState({ plumbingIssue: event.target.value })
  }
  onSubmit = e => {
    e.preventDefault()
    let checkArray = []
    for (var key in this.state) {
      if (this.state[key] === true) {
        checkArray.push(key)
      }
    }
    let checkData = {
      checkbox: checkArray.toString(),
    }
    axios
      .post("http://localhost:4000/api/checkbox-save", checkData)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  onChangeEmergency = () => {
    this.setState(initialState => ({
      emergency: !initialState.emergency,
    }))
  }
  onChangeLeak = () => {
    this.setState(initialState => ({
      leak: !initialState.leak,
    }))
  }
  onChangeWater = () => {
    this.setState(initialState => ({
      water: !initialState.water,
    }))
  }
  onChangeDrain = () => {
    this.setState(initialState => ({
      drain: !initialState.drain,
    }))
  }
  onChangeNodig = () => {
    this.setState(initialState => ({
      nodig: !initialState.nodig,
    }))
  }
  onChangeOther = () => {
    this.setState(initialState => ({
      other: !initialState.other,
    }))
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div id="firstSlide">
          <h2 style={{ textAlign: "center" }}>
            What type of plumbing project is this?
          </h2>
          <div className="inputField">
            <input
              checked={this.state.emergency}
              onChange={this.onChangeEmergency}
              type="checkbox"
              id="emergency"
              value="emergency"
              name="plumbingIssue"
            ></input>
            <label htmlFor="emergency">Emergency Plumbing</label>
          </div>
          <div className="inputField">
            <input
              checked={this.state.leak}
              onChange={this.onChangeLeak}
              type="checkbox"
              id="leak"
              value="leak"
              name="plumbingIssue"
            ></input>
            <label htmlFor="leak">Leak Detection &amp; Repair</label>
          </div>
          <div className="inputField">
            <input
              checked={this.state.water}
              onChange={this.onChangeWater}
              type="checkbox"
              id="water"
              value="water"
              name="plumbingIssue"
            ></input>
            <label htmlFor="water">Water Heater Inpection</label>
          </div>
          <div className="inputField">
            <input
              checked={this.state.drain}
              onChange={this.onChangeDrain}
              type="checkbox"
              id="drain"
              value="drain"
              name="plumbingIssue"
            ></input>
            <label htmlFor="drain">Drain Cleaning</label>
          </div>
          <div className="inputField">
            <input
              checked={this.state.nodig}
              onChange={this.onChangeNodig}
              type="checkbox"
              id="nodig"
              value="nodig"
              name="plumbingIssue"
            ></input>
            <label htmlFor="nodig">No Dig Relining</label>
          </div>
          <div className="inputField">
            <input
              checked={this.state.other}
              onChange={this.onChangeOther}
              type="checkbox"
              id="other"
              value="other"
              name="plumbingIssue"
            ></input>
            <label htmlFor="other">Other</label>
          </div>
          <div className="inputField submitField">
            <input
              class="btn"
              type="button"
              id="next"
              value="Find My Plumber"
              onClick={this.onNext}
            ></input>
          </div>
        </div>
        <div id="secondSlide" style={{ display: `none` }}>
          <div className="inputField">
            <label htmlFor="emergency">Name</label>
            <input type="text" id="name" name="name"></input>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
