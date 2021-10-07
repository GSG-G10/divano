import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer className='footer-com'>
            <div className='sentence'>
            <p>@DIVANO all rights reserved 2021</p>
            <p>Ahmad Sabbah, Mohamed Rayes, Nadia Tamimi, Asmaa Najjar</p>
            </div>
            <div className='icons'>
            <FacebookRoundedIcon />
            <TwitterIcon />
            <WhatsAppIcon />
            <InstagramIcon />
            </div>
        </footer>
    )
}

export default Footer;