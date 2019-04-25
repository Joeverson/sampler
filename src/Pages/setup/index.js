import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div class="modal modal-lg" id="setup"><a class="modal-overlay" href="#modals-sizes" aria-label="Close"></a>
        <div class="modal-container" role="document">
          <div class="modal-header"><a class="btn btn-clear float-right" href="#modals-sizes" aria-label="Close"></a>
            <div class="modal-title h5">Configurações</div>
          </div>
          <div class="modal-body">
            <div class="content">
              <ul class="tab tab-block">
                <li class="tab-item active">
                  <a href="#pads">Pads</a>
                </li>
                <li class="tab-item">
                  <a href="#gravacoes" class="">Gravações</a>
                </li>
                <li class="tab-item">
                  <a href="#playlist">Playlists</a>
                </li>
              </ul>
              <div id="pads">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            {/* <button class="btn btn-primary">Share</button> */}
            <a class="btn btn-primary" href="#modals-sizes">Fechar</a>
          </div>
        </div>
      </div>
    )
  }
}