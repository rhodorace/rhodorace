import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { Button } from '@material-tailwind/react';

export default function DownloadTrackInfoButton({ trackInfoFileName, downloadFileName = trackInfoFileName }) {
    const router = useRouter();
    const { t } = useTranslation();

    const handleDownload = () => {
        const downloadUrl = `${router.basePath}/${trackInfoFileName}`;

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = downloadFileName;

        link.click();
    };

    return (
        <Button className='backGroundGreen mb-5' onClick={handleDownload}>{t("DOWNLOAD")} GPX</Button>
    );
};
