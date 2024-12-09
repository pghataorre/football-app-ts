import { MouseEvent } from 'react';

const linkToSection = (event: MouseEvent | undefined, linkId: string) => {
  if (event) event?.preventDefault();
  document.getElementById(linkId)?.scrollIntoView({behavior: 'smooth'});
}

export default linkToSection;
