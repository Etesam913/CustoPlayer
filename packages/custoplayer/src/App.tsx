import styled from 'styled-components';
import Custoplayer from './lib/EntryPoint';
import { useState } from 'react';

function App() {
  const [previewTooltipId, setPreviewTooltipId] = useState<'text' | 'thumbnail' | 'textAndThumbnail'>('text');

  return (
    <MainContainer>
      <Wrapper>
        <Custoplayer
          width='min(95%, 60rem)'
          poster='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/grain-video-poster.png'
          playsInline={true}
          crossOrigin='anonymous'
          preload='auto'
          values={{
            previewTooltip: {
              id: previewTooltipId,
              atlasImage:
                'https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/thumbs.jpg',
            },
            controlsBar: {
              barColor: '#386641',
              animate: 'movement',
            },
            item1: {
              id: 'playButton1',
              buttonColor: '#a7c957',
            },
            item2: {
              id: 'volumeButton1',
              barId: 'volumeBar1',
              buttonColor: '#a7c957',
              volumeColor: '#6a994e',
              hideOnMobile: true,
            },
            item3: {
              id: 'currentTime',
              hideOnMobile: true,
            },
            item4: {
              id: 'progressBar1',
              progressColor: '#6a994e',
              barColor: 'white',
            },
            item5: {
              id: 'duration',
              hideOnMobile: true,
            },
            item6: {
              id: 'settingsButton1',
              buttonColor: '#a7c957',
              settingsMenuColor: '#386641',
              settingsMenuOrientation: 'left',
              options: {
                subtitles: true,
                playbackSpeed: [0.25, 0.5, 1, 1.25, 1.5, 1.75, 2],
                quality: true,
              },
            },
            item7: {
              id: 'fullscreenButton1',
              buttonColor: '#a7c957',
            },
          }}
          /* The below handlers are for the cypress tests. They do not change any styles */
          onClick={() => console.log('video clicked')}
          onPlay={() => console.log('video playing')}
          onPause={() => console.log('video paused')}
          onLoadStart={() => console.log('video data load start')}
          onLoadedData={() => console.log('video data loaded')}
          onTimeUpdate={() => console.log('time updated')}
          onDurationChange={() => console.log('video duration changed')}
          onSeeked={() => console.log('video seeked')}
          onSeeking={() => console.log('video seeking')}
          onVolumeChange={(e) => console.log('muted')}
        >
          <source
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/grain-video-1080.mp4'
            type='video/mp4'
            id='custoplayer-1080'
          />
          <source
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/grain-video-720.mp4'
            type='video/mp4'
            id='custoplayer-720'
          />
          <source
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/grain-video-480.mp4'
            type='video/mp4'
            id='custoplayer-480'
          />
          <source
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/grain-video-240.mp4'
            type='video/mp4'
            id='custoplayer-240'
          />
          <source
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/grain-video-144.mp4'
            type='video/mp4'
            id='custoplayer-144'
          />
          <track
            label='English'
            kind='metadata'
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/english.vtt'
            srcLang='en'
            default
          />
          <track
            label='Spanish'
            kind='metadata'
            srcLang='es'
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/spanish.vtt'
          />
          <track
            kind='metadata'
            id='custoplayer-thumbnails'
            src='https://custoplayer.nyc3.cdn.digitaloceanspaces.com/testing/thumbs.vtt'
          />
          yolo swag
        </Custoplayer>
        <h2>Options:</h2>
        <button
          data-cy='changePreviewTooltipIdButton'
          onClick={() => setPreviewTooltipId('thumbnail')}
        >
          Change previewTooltip to thumbnail
        </button>

      </Wrapper>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  background-color: #1d1d1dff;
  height: 100vh;
  width: 100vw;
  color: white;
`;

const Wrapper = styled.div`
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default App;
