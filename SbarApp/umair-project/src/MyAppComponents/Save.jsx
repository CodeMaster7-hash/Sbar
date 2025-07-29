function Footer3() {

  const shareOptions = [
      { name: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=' },
      { name: 'Twitter', url: 'https://twitter.com/intent/tweet?url=' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/sharing/share?url=' },
      { name: 'Pinterest', url: 'https://pinterest.com/pin/create/button/?url=' },
  ];

  const handleShare = (url) => {
      const currentPageUrl = window.location.href;
      const shareUrl = url + encodeURIComponent(currentPageUrl);
      window.open(shareUrl, '_blank');
  };

  return (
      <>

          <div className="sm">
              <h3>Share this page:</h3>
              <ul>
                  {shareOptions.map((option, index) => (
                      <li key={index}>
                          <button onClick={() => handleShare(option.url)}>{option.name}</button>
                      </li>
                  ))}
              </ul>


          </div>
      </>
  );
}
export default Footer3;