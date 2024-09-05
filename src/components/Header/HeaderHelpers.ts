import { MouseEvent } from 'react';

const linkToSection = (event: MouseEvent, linkId: string) => {
  event?.preventDefault();
  document.getElementById(linkId)?.scrollIntoView({behavior: 'smooth'});
}

export default linkToSection;
