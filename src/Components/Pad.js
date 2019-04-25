import React from 'react'
import * as Const from '../Utils/Constants'

export default class extends React.Component {
  _controls() {
    if (this.props.showControls) {
      return (
        <div>
          <div class="card-header">
            <div class="card-title h5">Music</div>
            <div class="card-subtitle text-gray">volume</div>
            <input 
              class="slider" 
              type={"range"} 
              min={"0"} 
              max={"100"}
              onChange={this.props.onVolume}
              defaultValue={"75"}/>
          </div>
          <div class="card-footer container">
            <div class='columns'>
              <div class='column col-2'>
                <button class={`btn bg-${this.props.color}`} onClick={this.props.onPlay}>
                  <i class={`fas ${this.props.play ? 'fa-play' : 'fa-pause'}`}> </i>
                </button>
              </div>
              <div class={'column col-2'}>
                <button 
                  class={`btn bg-${this.props.color} ${this.props.loopSelected ? 'badge' : ''}`}
                  onClick={this.props.onLoop}>
                  <i class="fas fa-sync"> </i>
                </button>
              </div>
              <div class={'column col-2'}>
                <button 
                  class={`btn bg-${this.props.color}`}
                  onClick={this.props.onAddMusic}>
                  <i class="fas fa-file-audio"> </i>
                </button>
              </div>
              <div class={'column col-2'}>
                <select class="form-select"
                  onChange={this.props.onChangeGroup}>
                  <option value={"dark"}>Dark</option>
                  <option value={"gray"}>Gray</option>
                  <option value={"error"}>Error</option>
                  <option value={"warning"}>Warning</option>
                  <option value={"success"}>success</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div class="card" style={{marginBottom: 20}}>
          <div class={`card-image bg-${this.props.color}`}>
            <img src={Const.IMAGE.LOGO} class="img-responsive" alt='logo-pad'/>
            <button 
              class={`btn bg-${this.props.color}`}
              style={{margin: 10}}
              onClick={this.props.openSetup}>
              <i class="fas fa-cogs"> </i>
            </button>
          </div>
          <div class="bar bar-sm">
            <div 
              class={`bar-item bg-${this.props.color}`} 
              role={"progressbar"} 
              style={{ width: "25%" }} 
              aria-valuenow={32}
              aria-valuemin="0" 
              aria-valuemax="100"></div>
          </div>
          {
            this._controls()
          }
        </div>
    )
  }
}