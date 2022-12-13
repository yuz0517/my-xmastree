import React from 'react'
import { DivTreeSection } from "../Tree";
import styled from 'styled-components';
function Ball1_list() {
  return (
    <>
     <DivTreeSection>
      {List &&
        List.map((item) => (
          <Draggable
            key={item.id}
            ref={nodeRef}
            onDrag={(e, data) => trackBall1Pos(data)}
            onStart={handleStart}
            onStop={handleEnd}
          >
            <DivBall
              key={item.id}
              ref={nodeRef}
              onClick={() => onBallClick(item.id)}
              //className={`div-img-ball${index}`}
              onDoubleClick={() => onRemoveClick(item.id)}
              style={{ backgroundImage: `url(${ball1})` }}
            ></DivBall>
          </Draggable>
        ))}
        </DivTreeSection>
    </>
  )
}

export default Ball1_list