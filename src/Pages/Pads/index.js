import React from 'react'
import Pad from '../../Components/Pad'
import uniqid from 'uniqid'
import * as audio from '../../lib/sound'
import horse from '../../Assets/audios/horse.ogg'
import hihat from '../../Assets/audios/Hihat.wav'

export default class extends React.Component {
  state = {
    launch: {},
    pads: [
      {
        _id: uniqid(),
        path: hihat,
        play: true,
        loopSelected: false,
        showControls: true,
        keymap: [{
          key: 65,
          type: 'press',
          action: (sound) => {
            console.log('asdasdasd')
            sound.play()
          }
        }]
      },
      {
        _id: uniqid(),
        path: horse,
        play: true,
        loopSelected: false,
        showControls: false,
        keymap: [{
          key: 83,
          type: 'press',
          action: (sound) => {
            console.log('asdasdasd')
            sound.play()
          }
        }]
      },
      {
        _id: uniqid(),
        path: horse,
        play: true,
        loopSelected: false,
        showControls: false,
        keymap: []
      },
      {
        _id: uniqid(),
        path: horse,
        play: true,
        loopSelected: false,
        showControls: false,
        keymap: []
      }]
  }

  /**
   * metodo responsavel por gravar as informações de
   * cada pad onde os maniuladores individuais iram
   * apenas chama-lo e setar aso que deve ser modificado 
   * no obj de audio
   * 
   * @param {object} pad 
   * @param {*} callback 
   */
  _handlerLaunch(pad, callback) {
    this.setState({
      pads: this.state.pads.map(data => {
        if (data._id == pad._id) {
          data = callback(data)
        }        
        return data
      })
    })
  }

  componentDidMount () {
    audio.sounds.load(this.state.pads.map(io => io.path))
    audio.sounds.whenLoaded = () => {
      this.setState({
        pads: this.state.pads.map(pad => {
          pad['audio'] = audio.sounds[pad.path]
          pad.keymap.forEach(map => {
            let key = audio.sounds.keyboard(map.key)
            key[map.type] = () => map.action(pad.audio)
          })
          return pad
        })
      })
    }
  }

  onPlay (pad) {
    this._handlerLaunch(pad, data => {
      data.play = !data.play
      data.audio.play()

      return data
    })
  }

  onLoop (pad) {
    this._handlerLaunch(pad, data => {
      data.loopSelected = !data.loopSelected
      data.audio.loop = data.loopSelected

      return data
    })
  }

  onAddMusic (pad, el) {
    console.log(el.target)
  }

  onVolume (pad, el) {    
    this._handlerLaunch(pad, data => {
      data.audio.volume = el.target.value / 100
      return data
    })
  }

  onChangeGroup(pad, el) {
    this._handlerLaunch(pad, data => {
      data.group = el.target.value
      return data
    })
  }

  render () {
    return (
      <div class={"container"}>
        <div class={"columns"}>
            {
              this.state.pads.map(conf => (
                <div class={"column col-4"}>
                  <Pad
                    showControls={conf.showControls}
                    play={conf.play}
                    color={conf.group}
                    onChangeGroup={(el) => this.onChangeGroup(conf, el)}
                    loopSelected={conf.loopSelected}
                    onAddMusic={(self) => this.onAddMusic(conf, self)}
                    onVolume={(self) => this.onVolume(conf, self)}
                    onLoop={() => this.onLoop(conf)}
                    openSetup={() => this._handlerLaunch(conf, data => {
                      data.showControls = !data.showControls
                      return data
                    })}
                    onPlay={() => this.onPlay(conf)} />
                </div>
              ))
            }
        </div>
      </div>
    )
  }
}
