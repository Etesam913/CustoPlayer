import React from 'react';
import { Custoplayer } from 'custoplayer';

function CustoplayerExample() {
  return (
    <Custoplayer
      poster='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/docs/custoplayer-demo-poster.png'
      src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/docs/compressed-custoplayer-demo.mp4'
      values={{
        previewTooltip: {
          id: 'text',
        },
        controlsBar: {
          animate: 'movement',
          barColor: 'rgba(28, 28, 28, 0.85)',
        },
        item1: {
          id: 'playButton1',
          buttonColor: '#b7cef4',
        },
        item2: {
          id: 'volumeButton1',
          barId: 'volumeBar2',
          volumeColor: '#a4c3f5',
          buttonColor: '#a4c3f5',
        },
        item3: {
          id: 'currentTime',
          textColor: '#b7cef4',
        },
        item4: {
          id: 'progressBar1',
          progressColor: '#a4c3f5',
        },
        item5: {
          id: 'duration',
          textColor: '#b7cef4',
        },
        item6: {
          id: 'settingsButton1',
          buttonColor: '#a4c3f5',
          settingsMenuColor: '#a4c3f5',
          settingsMenuOrientation: 'left',
          options: {
            playbackSpeed: [0.25, 0.5, 1, 1.5, 2],
          },
        },
        item7: {
          id: 'fullscreenButton1',
          buttonColor: '#b7cef4',
        },
      }}
    />
  );
}

export default CustoplayerExample;
