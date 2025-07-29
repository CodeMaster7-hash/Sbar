import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

function Footer2() {

    return (

        <>
            <div id="bsd">

                <footer>

                    <h3>Share Us:</h3>
                    <div className="share">
                        <LinkedinShareButton url="shareUrl">
                            <LinkedinIcon size={50} round />
                        </LinkedinShareButton>
                    </div>


                    <div className="share">
                        <TwitterShareButton url="shareUrl">
                            <TwitterIcon size={50} round />
                        </TwitterShareButton>
                    </div>


                    <div className="share">
                        <FacebookShareButton url="shareUrl">
                            <FacebookIcon size={50} round />
                        </FacebookShareButton>
                    </div>


                    <div className="share">
                        <WhatsappShareButton url="shareUrl">
                            <WhatsappIcon size={50} round />
                        </WhatsappShareButton>
                    </div>

                </footer>

            </div>
        </>
    );
}
export default Footer2;