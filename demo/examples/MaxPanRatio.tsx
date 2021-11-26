import React, { useEffect, useRef } from 'react'

import Panzoom, { PanzoomObject } from '../../src/panzoom'
import Code from '../Code'
import Demo from '../Demo'

const code = <Code>{`Panzoom(elem, { maxPanRatio: 0.5 })`}</Code>

export default function MaxPanRatio() {
  const elem = useRef<HTMLDivElement>(null)
  let panzoom: PanzoomObject
  useEffect(() => {
    panzoom = Panzoom(elem.current, { maxPanRatio: 0.5 })
  }, [])
  return (
    <Demo title="MaxPanRatio" code={code}>
      <div className="buttons">
        <label>Try me: </label>
        <button
          onClick={() => {
            panzoom.zoomIn()
          }}>
          Zoom in
        </button>
        <button
          onClick={() => {
            panzoom.zoomOut()
          }}>
          Zoom out
        </button>
        <button
          onClick={() => {
            panzoom.reset()
          }}>
          Reset
        </button>
      </div>
      <div className="panzoom-parent">
        <div
          className="panzoom"
          ref={elem}
          style={{ width: '400px', border: '2px dotted', margin: '0 auto' }}>
          <img style={{ width: '100%', height: '100%' }} src="awesome_tiger.svg" />
        </div>
      </div>
      {/* <div className="panzoom-parent" style={{ position: 'fixed', height: '100vh', width: '100vw', top: 0, left: 0, margin: 0, padding: 0 }}>
        <div
          className="panzoom"
          ref={elem}
          style={{ width: '1440px', border: '2px dotted', margin: '0 auto' }}>
          <img style={{ width: '100%', height: '100%' }} src="awesome_tiger.svg" />
        </div>
      </div> */}
    </Demo>
  )
}
