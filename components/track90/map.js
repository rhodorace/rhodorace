import DownloadTrackInfoButton from '../download-track-info-button';

export default function Map() {
    return (
        <>
            <DownloadTrackInfoButton
                trackInfoFileName="RhodoRock90.gpx"
                downloadFileName="RhodoRock88.gpx"
            />
            <div className="mt-8 flex justify-center">
                <iframe
                    title="Rhodo Rock 88 km route"
                    className="w-full max-w-screen-xl"
                    src="https://tracedetrail.fr/en/iframe/10486"
                    scrolling="no"
                    style={{ border: 0, height: '800px' }}
                    allowFullScreen
                />
            </div>
        </>
    );
}
